import React, { useState } from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
import Dropdown from "antd/lib/dropdown";

const currencies = [
  { v: "", d: "Все" },
  { v: "kzt_sc", d: "KZT" },
  { v: "rub_sc", d: "RUB" },
  { v: "usd_sc", d: "USD" },
  { v: "euro_sc", d: "EUR" },
];

const kinds = [
  { v: "", d: "Все виды" },
  { v: 1, d: "Покупка токен пользовательем" },
  { v: 2, d: "Получение дохода" },
  { v: 3, d: "Вывод из кошелка" },
  { v: 4, d: "Пополнение кошелка" },
  { v: 5, d: "Досрочное погашение токена" },
  { v: 6, d: "Продажа токена на вторичном рынке" },
  { v: 7, d: "Покупка токена на вторичном рынке" },
];

function FilterModal({ close, setFilters }) {
  const [currency, setCurrency] = useState("");
  const [kind, setKind] = useState("");

  const menuCurrency = (
    <Menu>
      {currencies
        .filter((i) => i.v !== currency)
        .map((i, index) => (
          <Menu.Item key={index} onClick={() => setCurrency(i.v)}>
            <span>{i.d}</span>
          </Menu.Item>
        ))}
    </Menu>
  );

  const menuKind = (
    <Menu>
      {kinds
        .filter((i) => i.v !== kind)
        .map((i, index) => (
          <Menu.Item key={index} onClick={() => setKind(i.v)}>
            <span>{i.d}</span>
          </Menu.Item>
        ))}
    </Menu>
  );

  const handleResetFilters = () => {
    setFilters({
      by_currency: "",
      by_operation: "",
    });

    setTimeout(() => close(), 500);
  };

  const handleSubmitFilters = () => {
    setFilters({
      by_currency: currency,
      by_operation: kind,
    });

    setTimeout(() => close(), 500);
  };

  return (
    <div className="filter" style={{ display: "block" }}>
      <div className="filter-cont">
        <button onClick={close} className="clousmodal"></button>
        <div className="filter-cont-title">
          <div className="filter-cont-title-box">
            <div className="filter-cont-title-box-flex">
              <h3>Фильтры</h3>
              <span>5 соответствий</span>
            </div>
            <p>
              Здесь нужен небольшой текст, рассказывающий о работе с фильтрами
              для более точного подбора завершенных операций.
            </p>
          </div>
        </div>
        <div className="filter-cont-form">
          <div className="filter-cont-form-box">
            <div className="filter-cont-form-box-top">
              <label>
                Выберите валюту
                <Dropdown overlay={menuCurrency}>
                  <div>
                    {currencies
                      .filter((i) => i.v === currency)
                      .map((i, index) => (
                        <span key={index}>{i.d}</span>
                      ))}
                    <img src="/img/arrow-select.png" alt="" />
                  </div>
                </Dropdown>
              </label>
              <label>
                Вид операции
                <Dropdown overlay={menuKind}>
                  <div>
                    {kinds
                      .filter((i) => i.v === kind)
                      .map((i, index) => (
                        <span key={index}>{i.d}</span>
                      ))}
                    <img src="/img/arrow-select.png" alt="" />
                  </div>
                </Dropdown>
              </label>
            </div>
            <div className="filter-cont-form-box-bottom">
              <label>
                <input
                  type="button"
                  value="Применить"
                  onClick={handleSubmitFilters}
                />
              </label>
              <label>
                <input
                  type="button"
                  value="Сбросить"
                  onClick={handleResetFilters}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FilterModal.propTypes = {
  close: PropTypes.func.isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default FilterModal;
