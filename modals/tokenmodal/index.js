import { Menu } from 'antd';
import Dropdown from 'antd/lib/dropdown';

import React, { useState } from 'react';

import { getToken, logout } from '../../utils/auth';

const currencies = [
    { v: 'euro_sc', display: 'EUR.sc' },
    { v: 'kzt_sc', display: 'KZT.sc' },
    { v: 'rub_sc', display: 'RUB.sc' },
    { v: 'usd_sc', display: 'USD.sc' },
];

const Tokenmodal = () => {
    const [total, setTotal] = useState('');
    const [currency, setCurrency] = useState({
        v: currencies[0].v,
        display: currencies[0].display,
    });
    const [response, setResponse] = useState({
        type: null,
        message: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://api.digital-investor.kz/api/check-user-anket', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer ' + getToken(),
            },
        })
            .then((res) => res.json())
            .then((res) => {
                if (!res.data.has_anket) {
                    setResponse({
                        type: 'error',
                        message: 'Пожалуйста, заполните анкету.',
                    });
                } else {
                    const data = {
                        output_amount: total,
                        currency: currency.v,
                    };

                    fetch('https://api.digital-investor.kz/api/decrease-user-wallet', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            Authorization: 'Bearer ' + getToken(),
                        },
                        body: JSON.stringify(data),
                    }).then((res) => {
                        if (res.status === 401) {
                            logout();
                        }
                        setResponse({
                            type: 'success',
                            message: 'Вывод успешно завершён!',
                        });
                        setTimeout(() => {
                            location.reload();
                        }, 1000);
                        return res.json();
                    });
                }
            });
    };

    const menuCurrency = (
        <Menu>
            {currencies.map((item, index) => (
                <Menu.Item key={index} onClick={() => setCurrency({ v: item.v, display: item.display })}>
                    <span>{item.display}</span>
                </Menu.Item>
            ))}
        </Menu>
    );

    function cloustokenmodalmodal() {
        document.getElementById('tokenmodal').style.display = 'none';
    }

    return (
        <div className="tokenmodal" id="tokenmodal">
            <div className="tokenmodal-cont">
                <button onClick={cloustokenmodalmodal} className="clousmodal"></button>
                <div className="tokenmodal-cont-title">
                    <div className="tokenmodal-cont-title-box">
                        <h3>Вывод средств</h3>
                        <p>
                            Вывод возможен только на банковский счsadasdёт. Банки могут взимать комиссию за перевод
                            валюты.
                        </p>
                    </div>
                </div>
                <div className="tokenmodal-cont-form">
                    <form onSubmit={handleSubmit} className="tokenmodal-cont-form-box">
                        <div className="tokenmodal-cont-form-box-top">
                            <label>
                                Выберите валюту
                                <Dropdown overlay={menuCurrency}>
                                    <div>
                                        <span>{currency.display}</span>
                                        <img src="/img/arrow-select.png" alt="" />
                                    </div>
                                </Dropdown>
                            </label>
                            <label>
                                Номер счета
                                <input type="text" placeholder="2542547745771554777" />
                            </label>
                        </div>
                        <div className="tokenmodal-cont-form-box-bottom">
                            <div className="tokenmodal-cont-form-box-bottom-left">
                                <label>
                                    Номер счета банка
                                    <input type="text" placeholder="758585627" />
                                </label>
                                <label>
                                    Сумма
                                    <input
                                        type="text"
                                        onChange={(e) => setTotal(e.target.value)}
                                        placeholder="7000"
                                        required
                                    />
                                </label>
                            </div>
                            <div className="tokenmodal-cont-form-box-bottom-right">
                                {!!response.message && (
                                    <span
                                        style={{
                                            fontWeight: 500,
                                            fontSize: 17,
                                            lineHeight: '25px',
                                            color: response.type === 'error' ? 'red' : '#14906c',
                                        }}
                                    >
                                        {response.message}
                                    </span>
                                )}
                                <label>
                                    <input type="submit" value="Вывести средства" style={{ cursor: 'pointer' }} />
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Tokenmodal;
