import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getToken } from "../../../utils/auth";

function Details({ id, close }) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://api.digital-investor.kz/api/secondary/get-token-info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
        Accept: "application/json",
      },
      body: JSON.stringify({
        token_id: id,
      }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setData(data);
      }).catch(err => console.log(err));
  }, []);

  return (
    <div className="zayavmodalorder" style={{ display: "block" }}>
      <div className="zayavmodalorder-cont">
        <button onClick={close} className="clousmodal"></button>
        <div className="zayavmodalorder-cont-top">
          <h3>Подробнее</h3>
          <div className="zayavmodalorder-cont-top-box">
            <div className="zayavmodalorder-cont-top-box-item">
              <p>Стоимость токена</p>
              <span>{data?.token_cost} {data?.currency}</span>
            </div>
            <div className="zayavmodalorder-cont-top-box-item">
              <p>Стоимость токенов</p>
              <span>{data?.token_cost * data?.tokens_count} {data?.currency}</span>
            </div>
            <div className="zayavmodalorder-cont-top-box-item">
              <p>Сумма комиссии за сделку</p>
              <span>0 {data?.currency}</span>
            </div>
            <div className="zayavmodalorder-cont-top-box-item">
              <p>ИТОГО (ЗА ВЫЧЕТОМ КОМИССИИ)</p>
              <span>{data?.token_cost * data?.tokens_count} {data?.currency}</span>
            </div>
          </div>
        </div>
        <div className="zayavmodalorder-cont-bottom">
          <form>
            <div className="zayavmodalorder-cont-bottom-flex">
              <label className="inptext">
                Периодичность выплат
                <input type="text" placeholder={data?.payment_frequency} readOnly disabled />
              </label>
              <label className="inptext">
                Срок обращения
                <input type="text" placeholder={data?.circulation_start?.split(' ')[0] + ' - ' + data?.circulation_end?.split(' ')[0]} readOnly disabled />
              </label>
              <label className="inptext">
                Количество токенов в продаже
                <input type="text" placeholder={data?.tokens_count} readOnly disabled />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Details.propTypes = {
  id: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
};

export default Details;
