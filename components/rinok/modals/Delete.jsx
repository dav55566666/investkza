import React from "react";
import PropTypes from "prop-types";
import { getToken } from "../../../utils/auth";

function Delete({ id, close }) {
  const handleRequestDelete = () => {
    fetch("https://api.digital-investor.kz/api/secondary/delete-request", {
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
        if (res.status === 200) {
          window.location.reload();
        }
      });
  };

  return (
    <div className="deletemodal" style={{ display: "block" }}>
      <div className="deletemodal-cont">
        <button onClick={close} className="clousmodal"></button>
        <div className="deletemodal-cont-top">
          <h3>Удаление активной заявки</h3>
          <p>
            При удалении заявка будет снята со вторичного рынка. Все сделки по
            ней будут остановлены. Зарезервированные средства для покупки будут
            освобождены.
          </p>
        </div>
        <div className="deletemodal-cont-bottom">
          <div className="deletemodal-cont-bottom-box">
            <button type="button" onClick={handleRequestDelete}>
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

Delete.propTypes = {
  id: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
};

export default Delete;
