import React from 'react';

const Withdraw = ({ price, blocked, blockedtotal, btntext, currency, onTopopClick }) => {
  function opentopupmodal() {
    onTopopClick(currency);
    document.getElementById('topup').style.display = "block";
  }
  return (
    <div className="wallet-cont-flex-item">
      <p className="bgtext">{currency}.sc</p>
      <p className="price">{price}</p>
      <div className="wallet-cont-flex-item-central">
        <span>{blocked}</span>
        <span>{blockedtotal}</span>
      </div>
      <a onClick={opentopupmodal}>{btntext}</a>
    </div>
  );
}
export default Withdraw;
