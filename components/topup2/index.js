import React, { useState } from 'react';
import { getToken, logout } from '../../utils/auth';

const Topupv = ({ allwalletTotal, freebalanceTotal, blockedTotal, itogprice, currency }) => {
  const [amount, setAmount] = useState();
  const [message, setMessage] = useState();
  
  function cloustopupvmodal() {
    document.getElementById('topupv').style.display = "none";
  }

  const onAmountChange = (e) => {
    const { value } = e.target;
    setAmount(value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const postParams = {
      output_amount: amount,
      currency: `${currency.toLowerCase()}_sc`
    }
    if (currency.toLowerCase() === 'eur') {
      postParams.currency = 'euro_sc';
    }
    fetch('https://api.digital-investor.kz/api/check-user-anket', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + getToken()
      }
    }).then(res => res.json())
      .then(({ data }) => {
        if (!data.has_anket) {
          setMessage('Пожалуйста, заполните анкету');
        } else {
          fetch('https://api.digital-investor.kz/api/decrease-user-wallet', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(postParams)
          })
            .then(res => {
              if (res.status === 401) {
                logout();
              }
              location.reload();
              return res.json()
            })
            .catch(e => console.error(e));
        }
      })
      .catch(e => console.error(e));
  }

  return (
    <div className="topup" id="topupv">
      <div className="topup-cont">
        <button onClick={cloustopupvmodal} className="clousmodal"></button>
        <div className="topup-cont-info">
          <h3>{currency}.sc</h3>
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
          <form onSubmit={onSubmit}>
            <div className="topup-cont-form-top">
              <p>Введите количество валюты для пополнения</p>
              <label>
                <input onChange={onAmountChange} type="text" placeholder="1 200" />
              </label>
            </div>
            <div className="topup-cont-form-top">
              <p>Номер счета IBAN</p>
              <label>
                <input type="text" placeholder="BY86AKBB10100000002966000000" />
              </label>
            </div>
            <div className="topup-cont-form-top">
              <p>Номер счета банка</p>
              <label>
                <input type="text" placeholder="458558577" />
              </label>
            </div>

            <p className="itogprice">
              Итого с комиссией: {itogprice}
            </p>
            <label className="topupsend">
              <input type="submit" value="Вывести" />
              <span style={{
                paddingLeft: '20px',
                color: 'red'
              }}>{message}</span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Topupv;
