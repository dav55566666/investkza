import React, { useState } from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown } from "antd";

const currencies = [
  { v: "", d: "Все" },
  { v: "KZT", d: "KZT" },
  { v: "RUB", d: "RUB" },
  { v: "USD", d: "USD" },
  { v: "EUR", d: "EUR" },
];

const percents = [
  { v: "", d: "Все" },
  { v: 1, d: "До 5%" },
  { v: 2, d: "5-7%" },
  { v: 3, d: "Выше 7%" },
];

function FilterModal({ close, setFilters }) {
  const [currency, setCurrency] = useState("");
  const [percent, setPercent] = useState("");
  const [tokensCount, setTokensCount] = useState("");
  const [circulation, setCirculation] = useState("");
  const [price, setPrice] = useState("");

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

  const menuPercent = (
    <Menu>
      {percents
        .filter((i) => i.v !== percent)
        .map((i, index) => (
          <Menu.Item key={index} onClick={() => setPercent(i.v)}>
            <span>{i.d}</span>
          </Menu.Item>
        ))}
    </Menu>
  );

  const handleResetFilters = () => {
    setFilters("");

    setTimeout(() => close(), 500);
  };

  const handleSubmitFilters = () => {
    setFilters(
      `&by_currency=${currency}&by_price=${price}&by_circulation=${circulation}&by_tokens_count=${tokensCount}&by_percent=${percent}`
    );

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
                Количество токенов
                <Dropdown overlay="">
                  <input
                    type="number"
                    min="1"
                    value={tokensCount}
                    placeholder="1"
                    onChange={(e) => setTokensCount(e.target.value)}
                  />
                </Dropdown>
              </label>
            </div>
            <div className="filter-cont-form-box-top">
              <label>
                Срок погашения не позднее
                <Dropdown overlay="">
                  <input
                    type="date"
                    onChange={(e) => setCirculation(e.target.valueAsNumber)}
                  />
                </Dropdown>
              </label>
              <label>
                Выберите годовую ставку
                <Dropdown overlay={menuPercent}>
                  <div>
                    {percents
                      .filter((i) => i.v === percent)
                      .map((i, index) => (
                        <span key={index}>{i.d}</span>
                      ))}
                    <img src="/img/arrow-select.png" alt="" />
                  </div>
                </Dropdown>
              </label>
            </div>
            <div className="filter-cont-form-box-top">
              <label>
                Сумма в валюте за 1 токен
                <Dropdown overlay="">
                  <input
                    type="number"
                    min="1"
                    value={price}
                    placeholder="1"
                    onChange={(e) => setPrice(e.target.value)}
                  />
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
