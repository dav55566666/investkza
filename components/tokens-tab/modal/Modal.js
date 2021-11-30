import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';

import { getToken } from '../../../utils/auth';

function Modal({ id, onClose }) {
    const [token, setToken] = useState({});

    useEffect(() => {
        id &&
            fetch('https://api.digital-investor.kz/api/get-token-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + getToken(),
                },
                body: JSON.stringify({
                    token_id: id,
                }),
            })
                .then((data) => data.json())
                .then((res) => {
                    setToken(res.data);
                })
                .catch((err) => console.error(err));
    }, [id]);

    return (
        <div className="zayavmodalorder" style={{ display: 'block' }}>
            <div className="zayavmodalorder-cont">
                <button onClick={onClose} className="clousmodal"></button>
                <div className="zayavmodalorder-cont-top">
                    <h3>{token?.token_name}</h3>
                    <div className="zayavmodalorder-cont-top-box">
                        <div className="zayavmodalorder-cont-top-box-item">
                            <p>Всего токенов</p>
                            <span>{token?.tokens_count}</span>
                        </div>
                        <div className="zayavmodalorder-cont-top-box-item">
                            <p>Заблокировано на вторичном рынке</p>
                            <span>{token?.blocked_in_secondary ? token?.blocked_in_secondary : 0}</span>
                        </div>
                        <div className="zayavmodalorder-cont-top-box-item">
                            <p>Заблокировано для досрочного погашения</p>
                            <span>{token?.blocked_for_early}</span>
                        </div>
                        <div className="zayavmodalorder-cont-top-box-item">
                            <p>Досрочнов погашение через</p>
                            <span>{token?.days_to_repayment ? token?.days_to_repayment : 0 + ' дней'}</span>
                        </div>
                        <div className="zayavmodalorder-cont-top-box-item">
                            <p>Доход по токену</p>
                            <span>{token?.percent}%</span>
                        </div>
                        <div className="zayavmodalorder-cont-top-box-item">
                            <p>Выплачено</p>
                            <span>{token?.already_paid ? token?.already_paid : '-'}</span>
                        </div>
                        <div className="zayavmodalorder-cont-top-box-item">
                            <p>Осталось</p>
                            <span>{token?.left_to_pay ? token?.left_to_pay : '-'}</span>
                        </div>
                    </div>
                </div>
                <div className="zayavmodalorder-cont-bottom">
                    <form>
                        <div className="zayavmodalorder-cont-bottom-flex">
                            <label className="inptext">
                                Периодичность выплат
                                <input type="text" readOnly placeholder={token?.payment_frequency} />
                            </label>
                            <label className="inptext">
                                Дата окончания продаж
                                <input type="text" readOnly placeholder={token?.sales_end?.split(' ')[0]} />
                            </label>
                            <label className="inptext">
                                Дата окончания срока действия
                                <input type="text" readOnly placeholder={token?.circulation_end?.split(' ')[0]} />
                            </label>
                            {/* <label className="inptext">
                Количество токенов к аннулированию
                <input
                  type="text"
                  readOnly
                  placeholder={
                    token?.cancelled_tokens ? token?.cancelled_tokens : "---"
                  }
                />
              </label> */}
                        </div>
                    </form>
                    {token?.russ_white_paper?.length && (
                        <a href={token?.russ_white_paper} target="_blank" rel="noopener noreferrer">
                            White paper
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    id: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
