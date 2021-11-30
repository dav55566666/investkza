import React from 'react';

const Topup = ({ allwalletTotal, freebalanceTotal, blockedTotal, itogprice }) => {
    function cloustopupmodal() {
        document.getElementById('topup').style.display = 'none';
    }

    return (
        <div className="topup" id="topup">
            <div className="topup-cont">
                <button onClick={cloustopupmodal} className="clousmodal"></button>
                <div className="topup-cont-info">
                    <h3>USD.sc</h3>
                    <div className="topup-cont-info-item">
                        <p>Всего в кошельке</p>
                        <span>{allwalletTotal}</span>
                    </div>
                    <div className="topup-cont-info-item">
                        <p>Свободный баланс</p>
                        <span>{freebalanceTotal}</span>
                    </div>
                    <div className="topup-cont-info-item">
                        <p>Заблокировано для выплат</p>
                        <span>{blockedTotal}</span>
                    </div>
                </div>
                <div className="topup-cont-form">
                    <form>
                        <div className="topup-cont-form-top">
                            <p>Введите количество валюты для пополнения</p>
                            <label>
                                <input type="text" placeholder="1 200" />
                            </label>
                        </div>
                        <div className="topup-cont-form-chek">
                            <p>Выберите способ пополнения</p>
                            <label>
                                <input type="checkbox" />
                                <span className="chekspan"></span>
                                <p>
                                    Карта банка БелВЭБ<span>Комиссия 0,36%</span>
                                </p>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span className="chekspan"></span>
                                <p>
                                    Карта любого другого банка<span>Комиссия 0,57%</span>
                                </p>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span className="chekspan"></span>
                                <p>
                                    Текущий (расчетный) счет<span>Комиссия 0,25%</span>
                                </p>
                            </label>
                        </div>
                        <p className="itogprice">Итого с комиссией: {itogprice}</p>
                        <label className="topupsend">
                            <input type="submit" value="Пополнить" />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Topup;
