import React from "react";

const Refproitem = ({ title, desc, number, amounts }) => {
  return (
    <div className="refpro-cont-flex-item">
      <h4>{title}</h4>
      <div className="refpro-cont-flex-item-bottom">
        {!!desc && <p>{desc}</p>}
        {!amounts && <span style={{ textAlign: "end" }}>{number}</span>}
        {!!amounts && (
          <div className="ammount-add">
            <span>{amounts?.USD} USD</span>
            <span>{amounts?.RUB} RUB</span>
            <span>{amounts?.KZT} KZT</span>
            <span>{amounts?.EUR} EURO</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Refproitem;
