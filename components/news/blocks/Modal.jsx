import React from "react";
import PropTypes from "prop-types";

function Modal({ data, onClose }) {
  return (
    <div className="newsmodal" style={{ display: "block" }}>
      <div className="newsmodal-cont">
        <button onClick={onClose} className="clousmodal"></button>
        <div className="newsmodal-cont-top">
          <div className="newsmodal-cont-top-box">
            {!!data?.image && (
              <img
                src={data?.image}
                alt={data?.title}
                draggable="false"
                style={{ width: "100%" }}
              />
            )}
            <p className="title">
              {data?.title}
              <span>{data?.created_at.split("T")[0]}</span>
            </p>
            <p className="info">{data?.description}</p>
            {!!data?.tags && (
              <div className="heshtag">
                {data?.tags.map((tag, index) => (
                  <a key={index}>{tag}</a>
                ))}
              </div>
            )}
            <div className="infoflex">
              <div className="infoflex-item">
                <span>+19%</span>
                <a>Поступивший прирост</a>
                <p>стоимости акций на сегодняшний день</p>
              </div>
              <div className="infoflex-item">
                <span>+45%</span>
                <a>Прогнозируемый прирост</a>
                <p>в грядущие недели (максимум 2 месяца)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="newsmodal-cont-bottom">
          <div className="newsmodal-cont-bottom-box">
            <button onClick={onClose}>Инвестировать</button>
            <div className="newsmodal-cont-bottom-box-right">
              <p>Следите за новостями</p>
              <div className="newsmodal-cont-bottom-box-right-flex">
                <a></a>
                <a></a>
                <a></a>
                <a></a>
                <a></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  data: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
