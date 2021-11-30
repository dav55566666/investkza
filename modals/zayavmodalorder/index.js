import React, { useState, useEffect } from 'react';

const Zayavmodalorder = ({ tokenId }) => {
    const [tokenData, setTokenData] = useState({});

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
                .then((res) => {
                    setTokenData(res.data);
                    console.log('get info', res.data);
                    console.log('id', tokenId, 'data', tokenData);
                })
                .catch((err) => console.error(err));
    }, [tokenId]);

    function zayavmodalordernone() {
        document.getElementById('zayavmodalorder').style.display = 'none';
    }

    return (
        <div className="zayavmodalorder" id="zayavmodalorder">
            <div className="zayavmodalorder-cont">
                <button onClick={zayavmodalordernone} className="clousmodal"></button>
                <div className="zayavmodalorder-cont-top">
                    <h3>{tokenData.token_name}</h3>
                    <div className="zayavmodalorder-cont-top-box">
                        <div className="zayavmodalorder-cont-top-box-item">
                            <p>Всего токенов</p>
                            <span>100 000</span>
                        </div>
                        <div className="zayavmodalorder-cont-top-box-item">
                            <p>Заблокировано на вторичном рынке</p>
                            <span>20 000</span>
                        </div>
                        <div className="zayavmodalorder-cont-top-box-item">
                            <p>Досрочнов погашение через</p>
                            <span>150 денй</span>
                        </div>
                        <div className="zayavmodalorder-cont-top-box-item">
                            <p>Доход по токену</p>
                        </div>
                        <div className="zayavmodalorder-cont-top-box-item">
                            <p>Выплачено</p>
                            <span>10 000</span>
                        </div>
                        <div className="zayavmodalorder-cont-top-box-item">
                            <p>Осталось</p>
                            <span>15 000</span>
                        </div>
                    </div>
                </div>
                <div className="zayavmodalorder-cont-bottom">
                    <form>
                        <div className="zayavmodalorder-cont-bottom-flex">
                            <label className="inptext">
                                Периодичность выплат
                                <input type="text" placeholder="Ежеквартально" />
                            </label>
                            <label className="inptext">
                                Дата окончания продаж
                                <input type="text" placeholder="20.01.2025" />
                            </label>
                            <label className="inptext">
                                Дата окончания срока действия
                                <input type="text" placeholder="20.01.2021" />
                            </label>
                            <label className="inptext">
                                Количество токенов к аннулированию
                                <input type="text" placeholder="20 000" />
                            </label>
                        </div>
                    </form>
                    <a href={tokenData?.russ_white_paper} target="_blank" rel="noopener noreferrer">
                        White paper
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Zayavmodalorder;
