import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Pagination } from "antd";
import { getToken } from "../../utils/auth";

import CollapseItem from "../../uikit/collapse";

const FaqPage = () => {
  const [faqs, setFaqs] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    fetch("https://api.digital-investor.kz/api/get-faq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
        Accept: "application/json",
      },
      body: JSON.stringify({
        page: currentPage,
        per_page: 6,
      }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setTotalCount(data.total_count);
        setFaqs(data.faq_data);
      });
  }, [currentPage]);

  return (
    <div className="faqPage">
      <div className="container">
        <h1>FAQ</h1>
        {faqs &&
          faqs.map((faq) => {
            return (
              <CollapseItem
                key={uuidv4()}
                question={faq.title}
                answer={faq.description}
              />
            );
          })}
        <div className="pagination">
          <Pagination
            current={currentPage}
            onChange={(e) => setCurrentPage(e)}
            defaultPageSize={6}
            showSizeChanger={false}
            total={totalCount}
          />
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
