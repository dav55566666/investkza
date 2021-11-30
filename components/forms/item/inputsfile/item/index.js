import React from "react";

const AnketInputFileitem = ({
  imgPath,
  name,
  isMultiple,
  onChange,
  isDisabled,
}) => {
  return (
    <label htmlFor={name} className="forms-cont-item-labelfile">
      <img src={imgPath ? imgPath : "/img/Group21.png"} draggable={false} />
      <input
        type="file"
        name={name}
        multiple={!!isMultiple}
        disabled={!!imgPath || isDisabled}
        onChange={onChange}
        autoComplete="on"
      />
    </label>
  );
};
export default AnketInputFileitem;
