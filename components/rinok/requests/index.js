import React from "react";

const RequestsItem = ({ price, blocked, blockedtotal }) => {
  return (
    <div className="wallet-cont-flex-requests-item">
      <p className="price">{price}</p>
      <div className="wallet-cont-flex-requests-itembottom">
        <p>{blocked}</p>
        <span>{blockedtotal}</span>
        <br />
        <p style={{ fontSize: "20px", margin: "0 10%" }}>Дата подачи заявки</p>
      </div>
    </div>
  );
};
export default RequestsItem;
