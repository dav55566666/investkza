import React, { useState, useEffect } from 'react';
import { getToken, logout } from '../../utils/auth';

const Topup = ({ allwalletTotal, freebalanceTotal, blockedTotal, itogprice, currency }) => {
  const [amount, setAmount] = useState();
  const [message, setMessage] = useState();
  function cloustopupmodal() {
    document.getElementById('topup').style.display = "none";
  }

  const onAmountChange = (e) => {
    const { value } = e.target;
    setAmount(value);
  }
  const [commission, setCommission] = useState([0.36, 0.57, 0.25]);
  const [finalPrice, setFinalPrice] = useState();
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    calcResult();
  }, [amount, selectedId]);

  const onSubmit = (e) => {
    e.preventDefault();
    const postParams = {
      "action": "increase",
      "kzt_sc": 0,
      "rub_sc": 0,
      "euro_sc": 0,
      "usd_sc": 0
    }
    if (currency.toLowerCase() === 'eur') {
      postParams['euro_sc'] = +amount;
    } else {
      postParams[currency.toLowerCase() + '_sc'] = +amount;
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
          fetch('https://api.digital-investor.kz/api/fill-user-wallet', {
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
              window.location.reload();
              return res.json()
            });
        }
      });
  }
  function calcResult() {
    if (!selectedId || !amount) {
      return;
    }
    const index = +selectedId.replace('in', '') - 1;
    let result = amount * (commission[index] / 100)
    let finalResult = amount - result
    setFinalPrice(finalResult)
  }
  function changeInput(id) {
    setSelectedId(id);
  }

  return (
    <div className="topup" id="topup">
      <div className="topup-cont">
        <button onClick={cloustopupmodal} className="clousmodal"></button>
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
                <input onChange={onAmountChange} type="number" placeholder="1 200" />
              </label>
            </div>
            <div className="topup-cont-form-chek" onChange={e => changeInput(e.target.id)}>
              <p>Выберите способ пополнения</p>
              <label htmlFor="in1">
                <input id="in1" type="radio" name="radio" />
                <span className="chekspan"></span>
                <p>Карта банка БелВЭБ <span>Комиссия {commission[0]}%</span></p>
              </label>
              <label htmlFor="in2">
                <input id="in2" type="radio" name="radio" />
                <span className="chekspan"></span>
                <p>Карта любого другого банка<span>Комиссия {commission[1]}%</span></p>
              </label>
              <label htmlFor="in3">
                <input id="in3" type="radio" name="radio" />
                <span className="chekspan"></span>
                <p>Текущий (расчетный) счет<span>Комиссия {commission[2]}%</span></p>
              </label>
            </div>
            {finalPrice ?
              <p className="itogprice">
                Итого с комиссией: {finalPrice}
              </p>
              : null}
            <label className="topupsend">
              <input type="submit" value="Пополнить" />
              <span style={{
                paddingLeft: '20px',
                color: 'red'
              }}>{message}</span>
            </label>
          </form>
        </div>
      </div>
    </div >
  );
}

export default Topup;
