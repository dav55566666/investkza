import React from "react";

const Withdraw = ({ price, blocked, blockedtotal, btntext }) => {
  return (
    <div className="wallet-cont-flex-item">
      <p className="bgtext">BYN.sc</p>
      <p className="price">{price}</p>
      <div className="wallet-cont-flex-item-central">
        <span>{blocked}</span>
        <span>{blockedtotal}</span>
      </div>
      <a>{btntext}</a>
    </div>
  );
};
export default Withdraw;
