import React from 'react';
import PropTypes from 'prop-types';


const Sale = ({ title, children }) => {
  return (
    <div className="sale-page">
      <div className="sale-page-cont">
        <div className="sale-page-cont-title">
          <h1>{title}</h1>
        </div>
        <div className="sale-page-cont-flex">
          {children}
        </div>
      </div>
    </div>
  );
}
export default Sale;
