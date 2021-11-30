import React, { useState, useRef } from "react";

const CitizenDropdown = (props) => {
  const {
    setCitizenship,
    countri,
    countries,
    citizenship,
    onChangeCitizenship,
    validationInputs,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const citizenshipInput = useRef(null);

  function deletContainer(e, count) {
    e.preventDefault();
    setCitizenship(count);

    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  }

  let citizenshipDrowdown = "";

  if (typeof window === "object" && isFocused) {
    if (citizenship === "") {
      citizenshipDrowdown = countries.map((item) => {
        return (
          <div
            onClick={(e) => {
              deletContainer(e, item);
            }}
            className="itemStyle"
            key={item}
          >
            {item}
          </div>
        );
      });
    } else {
      citizenshipDrowdown = countri.map((item) => {
        return (
          <div
            onClick={(e) => deletContainer(e, item)}
            className="itemStyle"
            key={item}
          >
            {item}
          </div>
        );
      });
    }
  }

  return (
    <>
      <label className="textinp">
        {" "}
        Гражданство
        <input
          ref={citizenshipInput}
          onFocus={() => {
            setTimeout(() => {
              setIsFocused(true);
            }, 100);
          }}
          onBlur={() => {
            setTimeout(() => {
              setIsFocused(false);
            }, 250);
          }}
          type="text"
          className="inputCountries"
          placeholder="Резидент Казахстана"
          value={citizenship}
          onChange={onChangeCitizenship}
        />
        {citizenshipDrowdown.length > 1 && isFocused && (
          <div
            className="countriContainer"
            style={{
              backgroundColor: "#f3f3f3",
              maxHeight: "400px",
              padding: "20px",
              overflowY: "auto",
              position: "absolute",
              top: "100%",
              width: "100%",
              zIndex: 2,
            }}
          >
            {citizenshipDrowdown}
          </div>
        )}
        {validationInputs.citizenship && (
          <span style={{ color: "red" }}>{validationInputs.citizenship}</span>
        )}
      </label>
    </>
  );
};

export default CitizenDropdown;
