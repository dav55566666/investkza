import React, { useState, useEffect } from "react";
import WallettableTitle from "/components/prodattab/item/tabe-title/index";
import WallettableTitletd from "/components/prodattab/item/tabe-title/tabtitletd";
import Wallettableitem from "/components/prodattab/item/tabe-item";
import { getToken } from "../../utils/auth";
import { Pagination } from "antd";
import FilterModal from "./modals/FilterModal";
import Details from "./modals/Details";
import SubmitEvent from "./modals/SubmitEvent";

export default function BuyTokens() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrenPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [open, setOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [filters, setFilters] = useState("");

  useEffect(() => {
    fetch(
      `https://api.digital-investor.kz/api/secondary/get-all-requests?page=${currentPage}&per_page=8&type=sell${filters}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getToken(),
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(({ data }) => {
        setData(data?.requests_data?.data);
        setTotal(data?.total_count);
      });
  }, [currentPage, filters]);

  return (
    <>
      {!!open && (
        <FilterModal close={() => setOpen(false)} setFilters={setFilters} />
      )}
      {!!isDetailsOpen && (
        <Details id={isDetailsOpen} close={() => setIsDetailsOpen(false)} />
      )}
      {!!isBuyOpen && (
        <SubmitEvent
          id={isBuyOpen}
          close={() => setIsBuyOpen(false)}
          type="buy"
        />
      )}
      <div className="tokens-tab tokens-tab2">
        <div className="tokens-tab-cont">
          <div className="tokens-tab-cont-title">
            <div className="tokens-tab-cont-title-left">
              <h1>Мои токены для вторичного рынка</h1>
              <a href="tarif">Условия ввода и вывода денежных средств</a>
            </div>
            <div className="tokens-tab-cont-title-right">
              <div
                onClick={() => setOpen(true)}
                className="tokens-tab-cont-title-right-item"
              >
                <img src="/img/sacacsasc.png" />
                <p>Показать фильтры</p>
              </div>
            </div>
          </div>
          <div className="tokens-tab-cont-table">
            <table className="prodattab prodattab2">
              <tbody>
                <WallettableTitle>
                  <WallettableTitletd tdtext={"Токен Компания"} />
                  <WallettableTitletd tdtext={"Номинальная стоимость"} />
                  <WallettableTitletd tdtext={"Годовая ставка"} />
                  <WallettableTitletd tdtext={"Количество токенов, шт."} />
                  <WallettableTitletd tdtext={"Стоимость одного токена"} />
                  <WallettableTitletd tdtext={""} />
                  <WallettableTitletd tdtext={""} />
                </WallettableTitle>
                {!!data.length &&
                  data.map((item, index) => (
                    <Wallettableitem
                      key={index}
                      tokenp={item?.token_name}
                      valyutp={item?.token_nominal_cost + item?.currency}
                      tokens={item?.company_name}
                      price={item?.percent_rate + "%"}
                      dedline={item?.token_count}
                      lastp={item?.token_cost + " " + item?.currency}
                      lasts={"+0.05 " + item?.currency}
                      id={item?.users_token_id}
                      idRequest={item?.request_id}
                      openDetails={setIsDetailsOpen}
                      openBuy={setIsBuyOpen}
                    />
                  ))}
              </tbody>
            </table>
          </div>
          <Pagination
            showSizeChanger={false}
            onChange={(e) => setCurrenPage(e)}
            defaultCurrent={1}
            current={currentPage}
            total={total}
          />
        </div>
      </div>
    </>
  );
}
