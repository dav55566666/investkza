import React, { useState, useEffect } from "react";
import Wallettableblock from "/components/prodattab/item/index";
import { getToken } from "../../utils/auth";
import { Pagination } from "antd";
import FilterModal from "./modals/FilterModal";

export default function MyTokens() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrenPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState("");

  useEffect(() => {
    fetch(
      `https://api.digital-investor.kz/api/secondary/get-user-tokens?page=${currentPage}&per_page=8${filters}`,
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
        setTotal(res?.data?.total_count);
      });
  }, [currentPage, filters]);

  return (
    <>
      {!!open && (
        <FilterModal close={() => setOpen(false)} setFilters={setFilters} />
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
          {!!data && <Wallettableblock data={data} />}
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
}
