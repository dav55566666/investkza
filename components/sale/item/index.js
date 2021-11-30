import React from 'react';
import PropTypes from 'prop-types';

const SaleItem = ({imgsrc,saletext,salelink}) => {
    return (
      <div className="sale-page-cont-flex-item">
        <div className="sale-page-cont-flex-item-img">
          <img src={imgsrc} />
        </div>
        <div className="sale-page-cont-flex-item-text">
          <p>{saletext}</p>
          <a>{salelink}</a>
        </div>
      </div>
    );
}
export default SaleItem;
