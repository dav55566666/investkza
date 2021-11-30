import React from "react";

const SetingsItem = ({ valyut, bik1, bik2, biktitle }) => {
  return (
    <div className="wallet-cont-flex-setings-item">
      <p className="valyut">{valyut}</p>
      <div className="wallet-cont-flex-setings-item-right">
        <div className="wallet-cont-flex-setings-item-right-box">
          <span>{biktitle}</span>
          <p>{bik1}</p>
        </div>
        <div className="wallet-cont-flex-setings-item-right-box">
          <span>Номер счета банка </span>
          <p>{bik2}</p>
        </div>
      </div>
    </div>
  );
};

export default SetingsItem;
