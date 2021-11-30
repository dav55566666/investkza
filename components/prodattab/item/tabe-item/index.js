import React from "react";

const Wallettableitem = ({
  tokenp,
  tokens,
  valyutp,
  valyuts,
  price,
  dedline,
  lastp,
  lasts,
  id,
  idRequest,
  openDetails,
  openBuy,
  openSell,
}) => {
  return (
    <>
      <tr className="tabitemtr walletitemtr walletitemtr3">
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
        <td className="newtd">
          <p>{lastp}</p>
          <span>{lasts}</span>
        </td>
        <td className="lasttdwallet lasttdwallet2">
          <button type="button" onClick={() => openDetails(id)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a onClick={() => openBuy(idRequest)}>Купить</a>
          <a onClick={() => openSell(idRequest)}>Продать</a>
        </td>
      </tr>
    </>
  );
};

export default Wallettableitem;
