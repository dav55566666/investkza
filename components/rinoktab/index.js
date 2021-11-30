import React, { useState, useEffect } from "react";
import RinokTabTitle from "/components/rinoktab/item/tabe-title/index";
import RinokTabTitletd from "/components/rinoktab/item/tabe-title/tabtitletd";
import RinokTabitem from "/components/rinoktab/item/tabe-item";
import Topup from "/components/topup";
import Delmodal from "/components/deletemodal";
import { Pagination } from "antd";
import { getToken } from "../../utils/auth";
import FilterModal from "../rinok/modals/FilterModal";
import Details from "../rinok/modals/Details";
import Delete from "../rinok/modals/Delete";

const Rinoktable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrenPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [open, setOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [filters, setFilters] = useState("");

  useEffect(() => {
    fetch(
      `https://api.digital-investor.kz/api/secondary/user-requests?page=${currentPage}&per_page=8${filters}`,
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
      .then((res) => {
        setData(res?.data?.tokens_data?.data);
        setTotal(res?.data?.tokens_data?.total);
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
      {!!isDeleteOpen && (
        <Delete id={isDeleteOpen} close={() => setIsDeleteOpen(false)} />
      )}
      <div className="tokens-tab tokens-tabr asd">
        <Topup />
        <Delmodal />
        <div className="tokens-tab-cont">
          <div className="tokens-tab-cont-title">
            <div className="tokens-tab-cont-title-left">
              <h1>Предложения токенов</h1>
              <a href="tarif">Условия ввода и вывода денежных средств</a>
            </div>
            <div
              className="tokens-tab-cont-title-right"
              style={{ justifyContent: "flex-end" }}
            >
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
            <table>
              <thead>
                <RinokTabTitle>
                  <RinokTabTitletd tdtext={"Цель заявки Статус"} />
                  <RinokTabTitletd tdtext={"Токен Компания"} />
                  <RinokTabTitletd tdtext={"Стоимость 1 токена"} />
                  <RinokTabTitletd tdtext={"Номинальная стоимость"} />
                  <RinokTabTitletd
                    tdtext={"Количество токенов: выпущено / продано / доступно"}
                  />
                  <RinokTabTitletd tdtext={""} />
                </RinokTabTitle>
              </thead>
              <tbody>
                {!!data &&
                  data.map((item, index) => (
                    <RinokTabitem
                      key={index}
                      itemwidth={"62%"}
                      tokenp={item?.request_type}
                      tokens={item?.request_status_text}
                      valyutp={item?.token_name}
                      valyuts={item?.token_name}
                      price={item?.token_cost + item?.currency}
                      dedline={item?.token_nominal_cost + item?.currency}
                      colv={item?.tokens_count + " /"}
                      colp={item?.tokens_sold + " /"}
                      cold={item?.tokens_count - item?.tokens_sold}
                      idToken={item?.users_token_id}
                      idRequest={item?.request_id}
                      openDetails={setIsDetailsOpen}
                      openDelete={
                        item?.request_status !== 2
                          ? setIsDeleteOpen
                          : () => null
                      }
                    />
                  ))}
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
          <Pagination
            showSizeChanger={false}
            onChange={(e) => setCurrenPage(e)}
            current={currentPage}
            defaultPageSize={8}
            pageSize={8}
            total={total}
          />
        </div>
      </div>
    </>
  );
};

export default Rinoktable;
