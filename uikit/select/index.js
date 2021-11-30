import React from 'react';

import CheckBox from '../checkbox';

const Select = ({ value, isOpen }) => (
    <div className="select">
        <img
            src="/img/selector/arrow.svg"
            alt=""
            className="select-arrow"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
        <p>{value}</p>

        {isOpen && (
            <div className="select_drop">
                <div className="select_drop-item">
                    <CheckBox label="Пункт 1" />
                </div>

                <div className="select_drop-item">
                    <CheckBox label="Пункт 2" />
                </div>

                <div className="select_drop-item">
                    <CheckBox label="Пункт 3" />
                </div>
            </div>
        )}
    </div>
);

Select.defaultProps = {
    value: '',
    isOpen: false,
};

export default Select;
