import React from "react";

const RinokTabitem = ({
  itemwidth,
  tokenp,
  tokens,
  valyutp,
  valyuts,
  price,
  dedline,
  colv,
  colp,
  cold,
  idToken,
  idRequest,
  openDetails,
  openDelete,
}) => {
  return (
    <tr className="tabitemtr tabitemtrrin">
      <td>
        <p>{tokenp}</p>
        <span>{tokens}</span>
      </td>
      <td>
        <p>{valyutp}</p>
        <span>{valyuts}</span>
      </td>
      <td>
        <p>{price}</p>
      </td>
      <td>
        <p>{dedline}</p>
      </td>
      <td className="rinoklasttd">
        <div className="flextd">
          <p>
            <span color="#414B4D!important;">{colv}</span>
            <span color="#14906C!important;">{colp}</span>
            <span color="#1D80AA!important;">{cold}</span>
          </p>
          <div>
            <span width={itemwidth}></span>
          </div>
        </div>
        <button type="button" onClick={() => openDetails(idToken)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button onClick={() => openDelete(idRequest)}>
          <img src="/img/hvhgvhgc.png" />
        </button>
      </td>
    </tr>
  );
};

export default RinokTabitem;
