import React from 'react';

const AnketCheckboxItem = ({ inptext, name, chacked, callback, isDisabled}) => {
    return (
      <label htmlFor={name} className="forms-cont-item-check">
        <input name={name} type='checkbox' defaultChecked={chacked} onChange={callback} disabled={isDisabled} autoComplete="on" />
        <span></span>
        <p>{inptext}</p>
      </label>
    );
}
export default AnketCheckboxItem;
