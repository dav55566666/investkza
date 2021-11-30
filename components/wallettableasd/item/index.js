import React from "react";
import { v4 as uuidv4 } from "uuid";
import WallettableTitle from "/components/wallettableasd/item/tabe-title/index";
import WallettableTitletd from "/components/wallettableasd/item/tabe-title/tabtitletd";
import Wallettableitem from "/components/wallettableasd/item/tabe-item";
const Wallettableblock = ({ data }) => {
  const currencies = {
    euro_sc: "EUR.sc",
    usd_sc: "USD.sc",
    ktz_sc: "KTZ.sc",
    rub_sc: "RUB.sc",
  };

  return (
    <div className="tokens-tab-cont-table">
      <table>
        <tbody>
          <WallettableTitle>
            <WallettableTitletd tdtext={"Вид операции"} />
            <WallettableTitletd tdtext={"Количество"} />
            <WallettableTitletd tdtext={"Валюта"} />
            <WallettableTitletd tdtext={"Дата / Время"} />
            <WallettableTitletd tdtext={""} />
            <WallettableTitletd tdtext={""} />
          </WallettableTitle>
          {data &&
            data.map((row) => (
              <Wallettableitem
                key={uuidv4()}
                row={row}
                currencies={currencies}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Wallettableblock;
