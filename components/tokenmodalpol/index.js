import Dropdown from "antd/lib/dropdown";
import React, { useState } from "react";
import { Menu } from "antd";
import { getToken, logout } from "../../utils/auth";

const currencies = [
  { v: "euro_sc", display: "EUR.sc" },
  { v: "kzt_sc", display: "KZT.sc" },
  { v: "rub_sc", display: "RUB.sc" },
  { v: "usd_sc", display: "USD.sc" },
];

const cards = [
  { v: "euro_sc", display: "Карта банка БелВЭБ" },
  { v: "kzt_sc", display: "Карта любого другого банка" },
  { v: "rub_sc", display: "Текущий (расчетный) счет" },
];

const Tokenmodalpol = () => {
  const [total, setTotal] = useState("");
  const [currency, setCurrency] = useState({
    v: currencies[0].v,
    display: currencies[0].display,
  });
  const [card, setCard] = useState({
    v: cards[0].v,
    display: cards[0].display,
  });
  const [response, setResponse] = useState({
    type: null,
    message: null,
  });

  const handleChange = (e) => {
    setTotal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://api.digital-investor.kz/api/check-user-anket", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + getToken(),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.data.has_anket) {
          setResponse({
            type: "error",
            message: "Пожалуйста, заполните анкету.",
          });
        } else {
          const data = {
            action: "increase",
            kzt_sc: 0,
            rub_sc: 0,
            euro_sc: 0,
            usd_sc: 0,
          };

          data[currency.v] = +total;

          fetch("https://api.digital-investor.kz/api/fill-user-wallet", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + getToken(),
            },
            body: JSON.stringify(data),
          }).then((res) => {
            if (res.status === 401) {
              logout();
            }
            setResponse({
              type: "success",
              message: "Ваш баланс успешно пополнен!",
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
        <Menu.Item
          key={index}
          onClick={() => setCurrency({ v: item.v, display: item.display })}
        >
          <span>{item.display}</span>
        </Menu.Item>
      ))}
    </Menu>
  );

  const menuCard = (
    <Menu>
      {cards.map((item, index) => (
        <Menu.Item
          key={index}
          onClick={() => setCard({ v: item.v, display: item.display })}
        >
          <span>{item.display}</span>
        </Menu.Item>
      ))}
    </Menu>
  );

  function cloustokenmodalmodal() {
    document.getElementById("tokenmodalpol").style.display = "none";
  }

  return (
    <div className="tokenmodal" id="tokenmodalpol">
      <div className="tokenmodal-cont">
        <button onClick={cloustokenmodalmodal} className="clousmodal"></button>
        <div className="tokenmodal-cont-title">
          <div className="tokenmodal-cont-title-box">
            <h3>Пополнение баланса</h3>
            <p>
              Вывод возможен только на банковский счёт. Банки могут взимать
              комиссию за перевод валюты.
            </p>
          </div>
        </div>
        <div className="tokenmodal-cont-form">
          <form className="tokenmodal-cont-form-box" onSubmit={handleSubmit}>
            <div className="tokenmodal-cont-form-box-top">
              <label>
                {" "}
                Выберите валюту
                <Dropdown overlay={menuCurrency}>
                  <div>
                    <span>{currency.display}</span>
                    <img src="/img/arrow-select.png" alt="" />
                  </div>
                </Dropdown>
              </label>
              <label>
                {" "}
                Выберите способ оплаты
                <Dropdown overlay={menuCard}>
                  <div>
                    <span>{card.display}</span>
                    <img src="/img/arrow-select.png" alt="" />
                  </div>
                </Dropdown>
              </label>
            </div>
            <div className="tokenmodal-cont-form-box-bottom">
              <div className="tokenmodal-cont-form-box-bottom-left">
                <label>
                  Количество
                  <input
                    type="text"
                    onChange={handleChange}
                    placeholder="10"
                    required
                  />
                </label>
                <label>
                  Итого
                  <input
                    type="text"
                    readOnly
                    placeholder="10"
                    value={total ? total + ' ' + currency.display.replace('.sc', '') : ""}
                  />
                </label>
              </div>
              <div className="tokenmodal-cont-form-box-bottom-right">
                {!!response.message && (
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: 17,
                      lineHeight: "25px",
                      color: response.type === "error" ? "red" : "#14906c",
                    }}
                  >
                    {response.message}
                  </span>
                )}
                <label>
                  <input
                    type="submit"
                    style={{ cursor: "pointer" }}
                    value="Пополниьт баланс"
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tokenmodalpol;
