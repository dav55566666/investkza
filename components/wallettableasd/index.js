import React, { useState, useEffect } from "react";
import Wallettableblock from "/components/wallettableasd/item/index";
import { Pagination } from "antd";
import { getToken } from "../../utils/auth";
import DateModal from "../wallet/modals/DateModal";
import FilterModal from "../wallet/modals/FilterModal";

const Wallettable2 = ({ title, link }) => {
  const [historyData, setHistoryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isDatesOpen, setIsDatesOpen] = useState(false);
  const [filters, setFilters] = useState({
    by_currency: "",
    by_operation: "",
  });
  const [dates, setDates] = useState({
    date_from: "",
    date_to: "",
  });

  useEffect(() => {
    fetch("https://api.digital-investor.kz/api/get-wallet-history", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
      body: JSON.stringify({
        page: currentPage,
        per_page: 10,
        ...filters,
        ...dates,
      }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setTotalCount(data.total_count);
        setHistoryData(data.data);
      });
  }, [currentPage, filters, dates]);

  const handleChange = (e) => {
    setCurrentPage(e);
  };

  return (
    <>
      {!!isFiltersOpen && (
        <FilterModal
          close={() => setIsFiltersOpen(false)}
          setFilters={setFilters}
        />
      )}
      {!!isDatesOpen && (
        <DateModal close={() => setIsDatesOpen(false)} setDates={setDates} />
      )}
      <div className="tokens-tab">
        <div className="tokens-tab-cont">
          <div className="tokens-tab-cont-title">
            <div className="tokens-tab-cont-title-left">
              <h1>{title}</h1>
              <a href="tarif">{link}</a>
            </div>
            <div className="tokens-tab-cont-title-right tokens-tab-cont-title-rightmin">
              <div
                className="tokens-tab-cont-title-right-item"
                style={{ cursor: "pointer" }}
                onClick={() => setIsFiltersOpen(true)}
              >
                <img src="/img/sacacsasc.png" />
                <p>Показать фильтры</p>
              </div>
              <div
                className="tokens-tab-cont-title-right-item"
                style={{ cursor: "pointer" }}
                onClick={() => setIsDatesOpen(true)}
              >
                <img src="/img/asdasd.png" />
                <p>Выбрать период</p>
              </div>
            </div>
          </div>
          <Wallettableblock data={historyData} />
          <Pagination
            onChange={handleChange}
            current={currentPage}
            defaultCurrent={1}
            total={totalCount}
          />
        </div>
      </div>
    </>
  );
};

export default Wallettable2;
