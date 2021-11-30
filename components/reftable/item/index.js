import React from "react";
import WallettableTitle from "/components/wallettableasd/item/tabe-title/index";
import ReftableTitletd from "/components/reftable/item/tabe-title/tabtitletd";
import Reftableitem from "/components/reftable/item/tabe-item";

const Reftableblock = ({ data }) => {
  return (
    <div className="tokens-tab-cont-table">
      <table>
        <tbody>
          <WallettableTitle>
            <ReftableTitletd tdtext={"Вид операции"} />
            <ReftableTitletd tdtext={"Сумма"} />
            <ReftableTitletd tdtext={"Валюта"} />
            <ReftableTitletd tdtext={"Дата/время"} />
          </WallettableTitle>
          {!!data && data.map((item) => (
            <Reftableitem
              key={item?.id}
              tokenp={item?.operation_type}
              valyutp={item?.amount}
              price={item?.currency.toUpperCase() + ".sc"}
              dedline={item?.created_at.split('T')[0]}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reftableblock;
