import React from 'react';
import PropTypes from 'prop-types';

const AnketItem = ({ titlep, title, desc, buttonvalue,children }) => {
    return (
      <div className="forms-cont-item">
        <div className="forms-cont-item-title">
          <h4>{title}</h4>
          <p>{titlep}</p>
        </div>
        {children}
      </div>
    );
}
export default AnketItem;
