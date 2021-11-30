import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getToken } from "../../../utils/auth";

function Buy({ id, close }) {
  const [data, setData] = useState([]);
  const [tokenCount, setTokenCount] = useState(1);
  const [tokenConst, setTokenConst] = useState(1);
  const [date, setDate] = useState();
  const [message, setMessage] = useState({
    type: null,
    msg: "",
  });

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
      });
  }, []);

  const handleBuy = (e) => {
    e.preventDefault();

    fetch("https://api.digital-investor.kz/api/secondary/apply-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
        Accept: "application/json",
      },
      body: JSON.stringify({
        token_id: id,
        token_count: tokenCount,
        token_cost: tokenConst,
        type: "buy",
        active_to: date,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          setMessage({ type: "success", msg: res.message });
          setTimeout(() => window.location.reload(), 1000);
        } else {
          setMessage({ type: "error", msg: res.message });
        }
      });
  };

  return (
    <div className="zayavmodalorder" style={{ display: "block" }}>
      <div className="zayavmodalorder-cont">
        <button onClick={close} className="clousmodal" />
        <div className="zayavmodalorder-cont-top">
          <h3>Заявка на покупку токенов на вторичном рынке</h3>
          <div className="zayavmodalorder-cont-top-box">
            <div className="zayavmodalorder-cont-top-box-item">
              <p>Название компании</p>
              <span>{data?.company_name}</span>
            </div>
            <div className="zayavmodalorder-cont-top-box-item">
              <p>Количество токенов</p>
              <input
                type="number"
                min="1"
                className="btnspan"
                value={tokenCount}
                onChange={(e) => setTokenCount(e.target.value)}
                required
                placeholder="1200"
              />
            </div>
            <div className="zayavmodalorder-cont-top-box-item">
              <p>Стоимость 1 токена</p>
              <input
                type="number"
                min="0"
                className="btnspan"
                value={tokenConst}
                onChange={(e) => setTokenConst(e.target.value)}
                required
                placeholder="10"
              />
            </div>
            <div className="zayavmodalorder-cont-top-box-item">
              <p>Номинальная стоимость токена</p>
              <span>
                {data?.token_cost} {data?.currency}
              </span>
            </div>
            <div className="zayavmodalorder-cont-top-box-item">
              <p>Стоимость токенов</p>
              <span>
                {tokenCount * tokenConst} {data?.currency}
              </span>
            </div>
            <div className="zayavmodalorder-cont-top-box-item">
              <p>Сумма комиссии за сделку</p>
              <span>0 {data?.currency}</span>
            </div>
            <div className="zayavmodalorder-cont-top-box-item">
              <p>ИТОГО С КОМИССИЕЙ</p>
              <span>
                {tokenCount * tokenConst} {data?.currency}
              </span>
            </div>
          </div>
        </div>
        <div className="zayavmodalorder-cont-bottom">
          <form onSubmit={handleBuy}>
            <div className="zayavmodalorder-cont-bottom-flex">
              <div className="zayavmodalorder-cont-bottom-flex-left">
                <label className="inpchek">
                  Дата окончания обращения токена
                  <p>{data?.circulation_end?.split(" ")[0]}</p>
                  {!!message.msg && (
                    <p
                      style={{
                        color: message.type === "error" ? "red" : "#14906c",
                        fontWeight: 600,
                      }}
                    >
                      {message.msg}
                    </p>
                  )}
                </label>
              </div>
              <div className="zayavmodalorder-cont-bottom-flex-right">
                <label className="inptext">
                  Заявка действует по
                  <input
                    type="date"
                    onChange={(e) => setDate(e.target.valueAsNumber)}
                    placeholder="27.02.2021"
                    required
                  />
                </label>
              </div>
            </div>
            <label className="inpbtn">
              <input type="submit" value="Подать заявку" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

Buy.propTypes = {
  id: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
};

export default Buy;
