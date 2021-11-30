import { Pagination } from "antd";
import React, { useState, useEffect } from "react";
import Header from "./blocks/Header";
import Main from "./blocks/Main";

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(null);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch(
      `https://api.digital-investor.kz/api/news?page=${currentPage}&per_page=6&value=${value}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data?.data);
        setTotalCount(res?.data?.total);
      });
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <Header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Поиск..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input type="submit" value="" />
        </form>
      </Header>
      <Main data={data} />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {!!totalCount && (
          <Pagination
            current={currentPage}
            onChange={(e) => setCurrentPage(e)}
            defaultPageSize={6}
            pageSize={6}
            showSizeChanger={false}
            total={totalCount}
          />
        )}
      </div>
    </React.Fragment>
  );
}
