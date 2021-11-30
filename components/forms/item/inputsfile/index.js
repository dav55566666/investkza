import React from 'react';
import PropTypes from 'prop-types';

const AnketInputFile = ({ imgPath, titleInp, inpPlaceholder, number, children }) => {
    return (
      <div className="forms-cont-item-inpfile-flex">
        {children}
      </div>
    );
}
export default AnketInputFile;
