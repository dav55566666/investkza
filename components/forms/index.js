import React from "react";

const Anket = ({
  title,
  titlep,
  children,
  buttonvalue,
  onSubmitHandler,
  isDisabled,
  isLoading,
}) => {
  return (
    <div className="forms">
      <div className="forms-cont">
        <form onSubmit={onSubmitHandler}>
          <div className="forms-cont-descrip">
            <h1>{title}</h1>
            <p>{titlep}</p>
          </div>
          {children}
          {!isLoading && (
            <label className="anket_send">
              <input
                type="submit"
                disabled={isDisabled}
                style={{
                  cursor: isDisabled ? "default" : "pointer",
                  backgroundColor: isDisabled ? "#A0A0A0" : "#599DBB",
                  pointerEvents: isDisabled ? "none" : "all",
                }}
                value={buttonvalue}
              />
            </label>
          )}
        </form>
      </div>
    </div>
  );
};
export default Anket;
