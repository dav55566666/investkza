import React from 'react';

const CheckBox = (props) => {
    return (
        <div className="checkbox">
            <input type="checkbox" id="cb1" />
            <label htmlFor="cb1">{props.label}</label>
        </div>
    );
};

export default CheckBox;
