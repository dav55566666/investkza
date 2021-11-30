import React, { useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "antd/lib/dropdown";

function DateModal({ close, setDates }) {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const handleResetFilters = () => {
    setDates({
      date_from: "",
      date_to: "",
    });

    setTimeout(() => close(), 500);
  };

  const handleSubmitFilters = () => {
    setDates({
      date_from: start,
      date_to: end,
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
              <h3>Выбрать период</h3>
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

DateModal.propTypes = {
  close: PropTypes.func.isRequired,
  setDates: PropTypes.func.isRequired,
};

export default DateModal;
