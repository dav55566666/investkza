import React, { useState } from 'react';

const SetingsItem = ({ valyut, bik1, onBik1, bik2, onBik2, biktitle }) => {
  return (
    <div className="wallet-cont-flex-setings-item">
      <p className="valyut">{valyut}</p>
      <div className="wallet-cont-flex-setings-item-right">
        <div className="wallet-cont-flex-setings-item-right-box">
          <span>{biktitle}</span>
          {
            bik1 ?
              <input type="number" value={bik1} disabled onChange={onBik1} /> :
              <input type="number" onChange={onBik1} />
          }

        </div>
        <div className="wallet-cont-flex-setings-item-right-box">
          <span>Номер счета банка </span>
          {
            bik2 ?
              <input type="text" value={bik2} disabled onChange={onBik2} /> :
              <input type="text" onChange={onBik2} />
          }

        </div>
      </div>
    </div>
  );
}
export default SetingsItem;
