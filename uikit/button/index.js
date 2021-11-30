import PropTypes from 'prop-types';

import React from 'react';

const Button = ({ color, outline, onClick, children }) => {
    return (
        <button className={`button ${color} ${outline}`} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.any,
    color: PropTypes.string,
    outline: PropTypes.string,
    onClick: () => {},
};

Button.defaultProps = {
    children: <></>,
    color: '',
    outline: '',
    onClick: () => {},
};

// color: 'submit' | 'white' | 'green',
// outline: 'green-outline' | 'blue-outline',

export default Button;
