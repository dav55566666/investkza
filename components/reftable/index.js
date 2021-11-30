import React, { useState } from "react";
import Reftableblock from "/components/reftable/item/index";
import { Pagination } from "antd";
import Filters from "./modals/Filters";

const Reftable = ({ data, page, setPage, setFilters }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  return (
    <>
      {!!isFiltersOpen && (
        <Filters
          setFilters={setFilters}
          onClose={() => setIsFiltersOpen(false)}
        />
      )}
      <div className="tokens-tab" style={{ paddingTop: "0px!important" }}>
        <div className="tokens-tab-cont">
          <div className="tokens-tab-cont-title">
            <div className="tokens-tab-cont-title-left">
              <h1>История начислений</h1>
              <a href="tarif">Условия ввода и вывода денежных средств</a>
            </div>
            <div
              className="tokens-tab-cont-title-right tokens-tab-cont-title-rightmin"
              style={{ justifyContent: "flex-end" }}
            >
              <div
                className="tokens-tab-cont-title-right-item"
                style={{ cursor: "pointer" }}
                onClick={() => setIsFiltersOpen(true)}
              >
                <img src="/img/sacacsasc.png" />
                <p>Показать фильтры</p>
              </div>
            </div>
          </div>
          {!!data && (
            <React.Fragment>
              <Reftableblock data={data?.data} />
              <Pagination
                defaultPageSize={data?.per_page}
                pageSize={data?.per_page}
                onChange={(e) => setPage(e)}
                current={page}
                defaultCurrent={1}
                total={data?.total}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    </>
  );
};

export default Reftable;
