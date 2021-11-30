import { format } from 'date-fns';

import React, { useState, useEffect } from 'react';

import { getToken } from '../../utils/auth';

const Zayavmodal = ({ token_id, user_token_id }) => {
    const [tokenData, setTokenData] = useState(null);
    const [count, setCount] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const [message, setMessage] = useState(null);
    const [inactive, setInactive] = useState(true);

    useEffect(() => {
        if (token_id) {
            fetch('https://api.digital-investor.kz/api/get-token-redemption-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${getToken()}`,
                },
                body: JSON.stringify({ token_id, user_token_id: user_token_id }),
            })
                .then((response) => response.json())
                .then(({ data }) => {
                    setTokenData(data);

                    const from = parseInt(data?.request_from?.split(' ')[0].replaceAll('-', ''));
                    const to = parseInt(data?.request_to?.split(' ')[0].replaceAll('-', ''));
                    const today = parseInt(format(new Date(), 'yyyy/MM/dd').replaceAll('/', ''));

                    if (today <= to && today >= from) {
                        setInactive(false);
                    } else {
                        setInactive(true);
                    }
                });
        }
    }, [token_id, user_token_id]);

    const fillRedemption = () => {
        if (tokenData && !!isChecked) {
            fetch('https://api.digital-investor.kz/api/fill-early-redemption', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${getToken()}`,
                },
                body: JSON.stringify({
                    token_id: token_id,
                    count,
                    user_token_id,
                }),
            })
                .then((response) => response.json())
                .then((res) => {
                    if (res.status === 200) {
                        window.location.reload();
                    } else {
                        setMessage(res.message);
                    }
                });
        }
    };

    function zayavmodalnone() {
        document.getElementById('zayavmodal').style.display = 'none';
    }
    return (
        <div className="zayavmodal" id="zayavmodal">
            <div className="zayavmodal-cont">
                <button onClick={zayavmodalnone} className="clousmodal"></button>
                <div className="zayavmodal-cont-top">
                    <h3>Заявка на досрочное погашение токенове</h3>
                    <div className="zayavmodal-cont-top-box">
                        <div className="zayavmodal-cont-top-box-item">
                            <p>Название токена</p>
                            <span>{tokenData?.token_name}</span>
                        </div>
                        <div className="zayavmodal-cont-top-box-item">
                            <p>Название компании</p>
                            <span>{tokenData?.company_name}</span>
                        </div>
                        <div className="zayavmodal-cont-top-box-item">
                            <p>Стоимость в валюте</p>
                            <span>
                                {tokenData?.token_cost} {tokenData?.currency}
                            </span>
                        </div>
                        <div className="zayavmodal-cont-top-box-item">
                            <p>Годовая ставка, %</p>
                            <span>{tokenData?.percent}</span>
                        </div>
                        <div className="zayavmodal-cont-top-box-item">
                            <p>ВСЕГО ТОКЕНОВ, шт</p>
                            <span>{tokenData?.tokens_count}</span>
                        </div>
                        <div className="zayavmodal-cont-top-box-item">
                            <p>Заблокировано для досрочного погашения</p>
                            <span>
                                <svg
                                    width="13"
                                    height="17"
                                    viewBox="0 0 13 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.3623 6.13402V3.59278C10.3623 1.61171 8.6297 0 6.5 0C4.3703 0 2.63768 1.61171 2.63768 3.59278V6.13402H0V17H13V6.13402H10.3623ZM3.76812 3.59278C3.76812 2.19153 4.99362 1.05155 6.5 1.05155C8.00638 1.05155 9.23188 2.19153 9.23188 3.59278V6.13402H3.76812V3.59278ZM11.8696 15.9485H1.13043V7.18557H11.8696V15.9485Z"
                                        fill="#EE1111"
                                    />
                                </svg>
                                {tokenData?.blocked_tokens}
                            </span>
                        </div>
                        <div className="zayavmodal-cont-top-box-item">
                            <p>Хочу заявить к погашению</p>
                            <input
                                onChange={(e) => {
                                    setCount(e.target.value);
                                }}
                                type="number"
                            />
                        </div>
                    </div>
                </div>
                <div className="zayavmodal-cont-bottom">
                    <h3>Условия досрочного погашения токенов</h3>
                    <label className="inptext">
                        Объем погашенных токенов
                        <input disabled type="text" placeholder={`${tokenData?.redemption_percent}% от размещения`} />
                    </label>
                    <label className="inptext">
                        Условие погашения
                        <input disabled type="text" placeholder={tokenData?.condition} />
                    </label>
                    <label className="check">
                        <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />С
                        условиями досрочного погашения ознакомлен
                    </label>
                    <p
                        style={{
                            color: 'red',
                            fontSize: 16,
                            lineHeight: '32px',
                            fontWeight: 500,
                        }}
                    >
                        {message}
                    </p>
                    <a href={tokenData?.russ_white_paper} target="_blank" rel="noopener noreferrer">
                        White paper
                    </a>
                    <div className="zayavmodal-cont-bottom-btn">
                        <button
                            type="button"
                            onClick={fillRedemption}
                            style={{
                                cursor: inactive ? 'default' : 'pointer',
                                background: inactive ? '#d7d7d7' : '#599dbb',
                            }}
                            disabled={inactive}
                        >
                            Подать заявку
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Zayavmodal;
