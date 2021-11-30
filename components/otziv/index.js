import React, { useState, useEffect } from "react";

import "antd/dist/antd.css";
import { Pagination } from "antd";
import Modal from "./modal/Modal";

const Otziv = ({ children, total, handleChange, page, perPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isModalOpen]);

  function disableScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  return (
    <>
      {isModalOpen && <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      <div className="otziv-page">
        <div className="otziv-page-cont">
          <div className="otziv-page-cont-title">
            <h1>Акции и конкурсы</h1>
            <button onClick={() => setIsModalOpen(true)}>Добавить отзыв</button>
          </div>
          <div className="otziv-page-cont-flex">{children}</div>
          <Pagination
            defaultPageSize={perPage}
            onChange={handleChange}
            current={page}
            defaultCurrent={1}
            total={total}
            style={{ marginTop: "20px", textAlign: "center" }}
          />
        </div>
      </div>
    </>
  );
};
export default Otziv;
