import React from "react";

const AnketInputitem = ({
  titleInp,
  inpPlaceholder,
  name,
  onChange,
  value,
  required,
  type,
}) => {
  const inputProps = value
    ? { defaultValue: value, disabled: true }
    : { onChange: onChange };

  return (
    <label htmlFor={name} className="forms-cont-item-label">
      {titleInp}
      <input
        type={type ? type : "text"}
        name={name}
        id={name}
        placeholder={inpPlaceholder}
        required={!!required}
        autoComplete="on"
        {...inputProps}
      />
    </label>
  );
};
export default AnketInputitem;
