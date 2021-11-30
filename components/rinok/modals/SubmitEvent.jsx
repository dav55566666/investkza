import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getToken } from "../../../utils/auth";

function SubmitEvent({ id, close, type }) {
  const [url, setUrl] = useState(null);
  const [info, setInfo] = useState({
    title: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (type === "sell") {
      setUrl("https://api.digital-investor.kz/api/secondary/sell-token");
      setInfo({
        title: "Заявка на продажу",
        description:
          "Вы подаете заявку на продажу на вторичном рынке , пожалуйста подтвердите действие",
      });
    } else {
      setUrl("https://api.digital-investor.kz/api/secondary/buy-token");
      setInfo({
        title: "Заявка на покупку",
        description:
          "Вы подаете заявку на покупку на вторичном рынке , пожалуйста подтвердите действие",
      });
    }
  }, [type]);

  const handleClick = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
        Accept: "application/json",
      },
      body: JSON.stringify({
        request_id: id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.location.reload();
        } else {
          setMessage(res.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="deletemodal" style={{ display: "block" }}>
      <div className="deletemodal-cont">
        <button onClick={close} className="clousmodal"></button>
        <div className="deletemodal-cont-top">
          <h3>{info.title}</h3>
          <p>{info.description}</p>
          {message && (
            <p
              style={{
                color: "red",
                fontWeight: 600,
              }}
            >
              {message}
            </p>
          )}
        </div>
        <div className="deletemodal-cont-bottom">
          <div className="deletemodal-cont-bottom-box">
            <button type="button" onClick={handleClick}>
              Подтвердить
            </button>
            <button type="button" onClick={close}>
              Отменить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

SubmitEvent.propTypes = {
  id: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default SubmitEvent;
