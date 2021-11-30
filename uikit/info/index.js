import PropTypes from 'prop-types';

import React from 'react';

const Info = ({ year, month, text }) => {
    return (
        <div className="info">
            <p className="year">{year}</p>
            <h6>{month}</h6>
            <p>{text}</p>
        </div>
    );
};

Info.propTypes = {
    year: PropTypes.string,
    month: PropTypes.string,
    text: PropTypes.string,
};

Info.defaultProps = {
    year: '2021',
    month: 'Январь',
    text: 'Lorem ipsum dolor sit amet.',
};

export default Info;
