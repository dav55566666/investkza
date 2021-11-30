import React from 'react';

const Withdraww = ({ price, blocked, blockedtotal, btntext, currency, onTopopvClick }) => {
  function opentopupvmodal() {
    onTopopvClick(currency);
    document.getElementById('topupv').style.display = 'block';
  }
  return (
    <div className="wallet-cont-flex-item">
      <p className="bgtext">{currency}.sc</p>
      <p className="price">{price}</p>
      <div className="wallet-cont-flex-item-central">
        <span>{blocked}</span>
        <span>{blockedtotal}</span>
      </div>
      <a onClick={opentopupvmodal}>{btntext}</a>
    </div>
  );
};
export default Withdraww;
