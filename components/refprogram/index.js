import React, { useState, useEffect } from "react";
import Reftable from "../reftable";
import Refproitem from "./item/index";
import { getToken } from "../../utils/auth";
import { Button, Input } from "antd";

const Refpro = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState("");

  useEffect(() => {
    fetch(
      `https://api.digital-investor.kz/api/ref?page=${page}&per_page=12&${filters}`,
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
        setData(res?.data);
      });
  }, [page, filters]);

  return (
    <div className="refpro tokens-tab wallet">
      <div className="refpro-cont">
        <h2>Реферальная программа</h2>
        <div className="refpro-cont-flex">
          <Refproitem
            title={"Рефералы"}
            desc={"Всего рефералов"}
            number={data?.ref_count}
          />
          <Refproitem
            title={"Сделки"}
            desc={"Всего сделок"}
            number={data?.deal_count}
          />
          <Refproitem
            title={"Бонусы"}
            desc={""}
            number={""}
            amounts={data?.amount}
          />
        </div>
        <h2 style={{ marginTop: "25px" }}>Реферальная ссылка</h2>
        <div
          style={{
            width: "100%",
            marginTop: "25px",
            display: "flex",
            maxWidth: "600px",
          }}
        >
          <Input readOnly value={data?.ref_link} size="small" />
          <Button
            style={{ marginLeft: "10px" }}
            type="button"
            onClick={() => navigator.clipboard.writeText(data?.ref_link)}
          >
            Копировать
          </Button>
        </div>
        <div className="walletstoritable">
          <Reftable
            data={data?.history}
            page={page}
            setPage={setPage}
            setFilters={setFilters}
          />
        </div>
      </div>
    </div>
  );
};
export default Refpro;
