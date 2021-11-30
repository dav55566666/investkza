import React, { useState, useEffect } from 'react';

import { getToken } from '../../utils/auth';

const Winmodal = ({ tokenId }) => {
    const [number, setNumber] = useState(1);
    const [tokenData, setTokenData] = useState();
    const [message, setMessage] = useState({
        type: null,
        msg: '',
    });

    function zayavmodalordernone() {
        document.getElementById('winmodal').style.display = 'none';
    }

    useEffect(() => {
        tokenId &&
            fetch('https://api.digital-investor.kz/api/get-token-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token_id: tokenId,
                }),
            })
                .then((data) => data.json())
                .then((data) => {
                    setTokenData(data);
                })
                .catch((err) => console.error(err));
    }, [tokenId]);

    const buy = (e) => {
        e.preventDefault();
        if (number < 1) return;
        fetch('https://api.digital-investor.kz/api/buy-tokens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer ' + getToken(),
            },
            body: JSON.stringify({
                token_id: tokenId,
                tokens_count: number,
            }),
        })
            .then((data) => data.json())
            .then((data) => {
                if (data.status === 200) {
                    setMessage({
                        type: 'success',
                        msg: data.message,
                    });
                    window.location.reload();
                } else {
                    setMessage({
                        type: 'error',
                        msg: data.message,
                    });
                }
            })
            .catch((err) => setMessage(err.message));
    };

    return (
        <div className="zayavmodalorder" id="winmodal">
            <div className="zayavmodalorder-cont">
                <button onClick={zayavmodalordernone} className="clousmodal" />
                <div className="zayavmodalorder-cont-top zayavmodalorder-cont-top-flex">
                    <img src={tokenData ? tokenData.data.company_logo : '/img/nailsimg.png'} alt="" />
                    <div className="zayavmodalorder-cont-top-flex-text">
                        <h3>{tokenData ? tokenData.data.token_name : 'loading'}</h3>
                        <div className="zayavmodalorder-cont-top-box">
                            <div className="zayavmodalorder-cont-top-box-item">
                                <p>Токен</p>
                                <span>{tokenData ? tokenData.data.token_name : 'loading'}</span>
                            </div>
                            <div className="zayavmodalorder-cont-top-box-item">
                                <p>Валюта</p>
                                {tokenData ? <span>{tokenData.data.currency}.sc</span> : 'loading'}
                            </div>
                            <div className="zayavmodalorder-cont-top-box-item">
                                <p>Годовая ставка</p>
                                {tokenData ? <span>{tokenData?.data?.percent}%</span> : 'loading'}
                            </div>
                            <div className="zayavmodalorder-cont-top-box-item">
                                <p>Стоимость 1 токена</p>

                                {tokenData ? (
                                    <span>
                                        {tokenData?.data?.toke_cost} {tokenData?.data?.currency}.sc
                                    </span>
                                ) : (
                                    'loading'
                                )}
                            </div>
                            <div className="zayavmodalorder-cont-top-box-item">
                                <p>Срок обращения</p>
                                <span>{tokenData?.data?.term_of_circulation} дней</span>
                            </div>
                        </div>
                        <div className="zayavmodalorder-cont-top-flex-text-bottom">
                            <p>
                                Количество токенов: <br />
                                выпущено / продано / доступно
                            </p>
                            <div className="zayavmodalorder-cont-top-flex-text-bottom-right">
                                <p>
                                    <span>{tokenData ? tokenData.data.tokens_count : 'loading...'} /</span>
                                    <span>{tokenData ? tokenData.data.sold_tokens : 'loading...'} /</span>
                                    <span>{tokenData ? tokenData.data.available_tokens : 'loading...'}</span>
                                </p>
                                <div className="progres">
                                    <span />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="zayavmodalorder-cont-bottom">
                    <form>
                        <div className="zayavmodalorder-cont-bottom-flex">
                            <label className="inptext">
                                {' '}
                                Периодичность выплат
                                <input
                                    disabled
                                    type="text"
                                    placeholder={tokenData ? tokenData.data.payment_frequency : 'loading...'}
                                />
                            </label>
                            <label className="inptext">
                                {' '}
                                График выплат
                                <input
                                    disabled
                                    type="text"
                                    placeholder={tokenData ? tokenData.data.first_payment_date : 'loading...'}
                                />
                            </label>
                            <label className="inptext">
                                {' '}
                                Дата начала обращения
                                <input
                                    disabled
                                    type="date"
                                    value={tokenData ? tokenData.data.circulation_start.split(' ')[0] : 'loading...'}
                                />
                            </label>
                            <label className="inptext">
                                {' '}
                                Дата окончания обращения
                                <input
                                    disabled
                                    type="date"
                                    value={tokenData ? tokenData.data.circulation_end.split(' ')[0] : 'loading...'}
                                />
                            </label>
                            <label className="inptext">
                                {' '}
                                Дата окончания продаж
                                <input
                                    disabled
                                    type="date"
                                    value={tokenData ? tokenData.data.sales_end.split(' ')[0] : 'loading...'}
                                />
                            </label>
                            <label className="inptext">
                                {' '}
                                Период обращения токена
                                <input
                                    disabled
                                    type="text"
                                    placeholder={
                                        tokenData ? `Через ${tokenData.data.term_of_circulation} дней` : 'loading...'
                                    }
                                />
                            </label>
                            <label className="inptext">
                                {' '}
                                Число
                                <input onChange={(e) => setNumber(e.target.value)} type="number" placeholder="1" />
                            </label>
                        </div>
                        <label className="inpbtn">
                            <input onClick={buy} type="submit" value="Купить" />
                            <span
                                style={{
                                    paddingLeft: '20px',
                                    color: message.type === 'error' ? 'red' : '#4BB496',
                                }}
                            >
                                {message.msg}
                            </span>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Winmodal;
