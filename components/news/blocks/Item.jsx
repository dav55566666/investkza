import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

function Item({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <React.Fragment>
      {!!isModalOpen && (
        <Modal data={data} onClose={() => setIsModalOpen(false)} />
      )}
      <div className="news-cont-flex-item">
        <div className="news-cont-flex-item-img">
          <img src={data?.image} />
        </div>
        <div className="news-cont-flex-item-text">
          <div className="news-cont-flex-item-title">
            <a onClick={() => setIsModalOpen(true)}>{data?.title}</a>
            <span>{data?.created_at.split("T")[0]}</span>
          </div>
          <div className="news-cont-flex-item-info">
            <p
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: "5",
              }}
            >
              {data?.description}
            </p>
          </div>
          {!!data?.tags && (
            <div className="news-cont-flex-item_heshtag">
              {data?.tags.map((tag, index) => (
                <a key={index}>{tag}</a>
              ))}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Item;
