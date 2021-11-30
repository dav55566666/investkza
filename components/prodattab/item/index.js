import React, { useState } from "react";
import WallettableTitle from "/components/wallettable/item/tabe-title/index";
import WallettableTitletd from "/components/wallettable/item/tabe-title/tabtitletd";
import Wallettableitem from "/components/wallettable/item/tabe-item";
import Details from "../../rinok/modals/Details";
import Sell from "../../rinok/modals/Sell";
import Buy from "../../rinok/modals/Buy";

const Wallettableblock = ({ data }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);

  return (
    <>
      {!!isDetailsOpen && (
        <Details id={isDetailsOpen} close={() => setIsDetailsOpen(false)} />
      )}
      {!!isBuyOpen && <Buy id={isBuyOpen} close={() => setIsBuyOpen(false)} />}
      {!!isSellOpen && (
        <Sell id={isSellOpen} close={() => setIsSellOpen(false)} />
      )}
      <div className="tokens-tab-cont-table">
        <table>
          <tbody>
            <WallettableTitle>
              <WallettableTitletd tdtext={"Токен Компания"} />
              <WallettableTitletd tdtext={"Номинальная стоимость"} />
              <WallettableTitletd tdtext={"Годовая ставка"} />
              <WallettableTitletd
                tdtext={"Свободные токены для вторичного рынка, шт."}
              />
              <WallettableTitletd tdtext={""} />
              <WallettableTitletd tdtext={""} />
            </WallettableTitle>
            {!!data.length && data.map((item, index) => (
              <Wallettableitem
                key={index}
                tokenp={item?.token_name}
                valyutp={item?.token_cost + ' ' + item?.currency}
                tokens={item?.company_short_name}
                price={item?.percent + "%"}
                dedline={item?.tokens_for_secondary}
                id={item?.token_id}
                idRequest={item?.users_token_id}
                openDetails={setIsDetailsOpen}
                openBuy={setIsBuyOpen}
                openSell={setIsSellOpen}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Wallettableblock;
