import React, { useState } from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
import Dropdown from "antd/lib/dropdown";

const currencies = [
  { v: "", d: "Все" },
  { v: "KZT", d: "KZT" },
  { v: "RUB", d: "RUB" },
  { v: "USD", d: "USD" },
  { v: "EUR", d: "EUR" },
];

function Filters({ setFilters, onClose }) {
  const [currency, setCurrency] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

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

  const handleResetFilters = () => {
    setFilters("");

    setTimeout(() => onClose(), 500);
  };

  const handleSubmitFilters = () => {
    setFilters(`start_date=${start}&end_date=${end}&currency=${currency}`);

    setTimeout(() => onClose(), 500);
  };

  return (
    <div className="filter" style={{ display: "block" }}>
      <div className="filter-cont">
        <button onClick={onClose} className="clousmodal"></button>
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
            </div>
            <div className="filter-cont-form-box-top">
              <label htmlFor="start">
                Дата начала
                <Dropdown overlay={""}>
                  <input
                    id="start"
                    type="date"
                    onChange={(e) => setStart(e.target.valueAsNumber)}
                    placeholder="27.02.2021"
                    required
                  />
                </Dropdown>
              </label>
              <label htmlFor="end">
                Дата окончания
                <Dropdown overlay={""}>
                  <input
                    id="end"
                    type="date"
                    onChange={(e) => setEnd(e.target.valueAsNumber)}
                    placeholder="27.02.2021"
                    required
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

Filters.propTypes = {
  setFilters: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Filters;
