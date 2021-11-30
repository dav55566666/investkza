import React from 'react';

const Tarif = ({children}) => {
    return (
        <div className="tarif">
          <div className="tarif-cont">
            <div className="tarif-cont-title">
              <h1>Тарифы</h1>
            </div>
            <div className="tarif-cont-flex">
              {children}
            </div>
          </div>
        </div>
    );
}

export default Tarif;
