import React from 'react';
import PropTypes from 'prop-types';

const AnketInput = ({ imgPath, titleInp, inpPlaceholder, number,children }) => {
    return (
      <div className="forms-cont-item-inp-flex">
        {children}
      </div>
    );
}
export default AnketInput;
