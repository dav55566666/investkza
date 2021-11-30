import React from "react";

const RequestsItem = ({ price, blocked, blockedtotal, status }) => {
  const currentStatus = ["ожидает", "выполнено", "отказано"].filter((i, ind) => ind === status);

  return (
    <div className="wallet-cont-flex-requests-item">
      <p className="price">{price.replace("_sc", "").toUpperCase()}</p>
      <div className="wallet-cont-flex-requests-itembottom">
        <p>{blocked}</p>
        <span>{blockedtotal}</span>
      </div>
      <div className="wallet-cont-flex-requests-itembottom">
        <p>Cтатус</p>
        <span>{currentStatus}</span>
      </div>
    </div>
  );
};
export default RequestsItem;
