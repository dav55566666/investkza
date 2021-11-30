import React, { useState, useEffect } from "react";
import { getToken } from "../../utils/auth";

const Toknewmodal = ({ token_id }) => {
  const [tokenData, setTokenData] = useState(null);

  useEffect(() => {
    if (token_id) {
      fetch("https://api.digital-investor.kz/api/get-token-redemption-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ token_id }),
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then((json) => {
          json && setTokenData(json.data);
        });
    }
  }, [token_id]);

  function tokennevmodalnone() {
    document.getElementById("tokennevmodal").style.display = "none";
  }

  function formatDate(date) {
    if (date) {
      return date.substring(0, 10);
    } else {
      return null;
    }
  }
  return (
    <div className="tokennevmodal" id="tokennevmodal">
      <div className="tokennevmodal-cont">
        <button onClick={tokennevmodalnone} className="clousmodal"></button>
        <div className="tokennevmodal-cont-top">
          <h3>Подробнее о выбранном токене</h3>
          <div className="tokennevmodal-cont-top-box">
            <div className="tokennevmodal-cont-top-boxitem">
              <p>Всего токенов, шт</p>
              <span>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.3 8.1H1.6M19 10.5C19 15.4706 14.9706 19.5 10 19.5C5.02944 19.5 1 15.4706 1 10.5C1 5.52944 5.02944 1.5 10 1.5C14.9706 1.5 19 5.52944 19 10.5ZM13 8.1C13 9.75685 11.6569 11.1 10 11.1C8.34315 11.1 7 9.75685 7 8.1C7 6.44315 8.34315 5.1 10 5.1C11.6569 5.1 13 6.44315 13 8.1Z"
                    stroke="#4BB496"
                    strokeWidth="2"
                  />
                </svg>
                {tokenData?.tokens_count}
              </span>
            </div>
            <div className="tokennevmodal-cont-top-boxitem">
              <p>Свободные токены для погашения</p>
              <span>{tokenData?.tokens_for_redemption}</span>
            </div>
            <div className="tokennevmodal-cont-top-boxitem">
              <p>Заблокировано для досрочного погашения</p>
              <span>
                <svg
                  width="16"
                  height="19"
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7339 6.85567V4.01546C12.7339 1.80132 10.7347 0 8.27734 0C5.82 0 3.82082 1.80132 3.82082 4.01546V6.85567H0.777344V19H15.7773V6.85567H12.7339ZM5.12517 4.01546C5.12517 2.44935 6.53921 1.17526 8.27734 1.17526C10.0155 1.17526 11.4295 2.44935 11.4295 4.01546V6.85567H5.12517V4.01546ZM14.473 17.8247H2.08169V8.03093H14.473V17.8247Z"
                    fill="#EE1111"
                  />
                </svg>
                {tokenData?.blocked_tokens}
              </span>
            </div>
          </div>
          <div className="tokennevmodal-cont-topuslov">
            <h3>Условия досрочного погашения токенов</h3>
            <label>
              Объем погашенных токенов
              <input
                disabled
                type="text"
                placeholder={`${tokenData?.redemption_percent}% от размещения`}
              />
            </label>
            <label>
              Условие погашения
              <input disabled type="text" placeholder={tokenData?.condition} />
            </label>
          </div>
          {!!tokenData?.russ_white_paper.length && (
            <a
              href={tokenData?.russ_white_paper}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 600 }}
            >
              White paper
            </a>
          )}
        </div>

        <div className="tokennevmodal-cont-bottom">
          <h3>Процесс досрочного погашения токенов</h3>
          <div className="tokennevmodal-cont-bottom-first">
            <p>Мои заявки на погашение по выбранному токену</p>
            <span>{tokenData?.user_requests}</span>
          </div>
          <div className="tokennevmodal-cont-bottom-last">
            <h3>Основная Информация о токене</h3>
            <div className="tokennevmodal-cont-bottom-last-item">
              <p>Название токена</p>
              <span>{tokenData?.token_name}</span>
            </div>
            <div className="tokennevmodal-cont-bottom-last-item">
              <p>Компания</p>
              <span>{tokenData?.company_name}</span>
            </div>
            <div className="tokennevmodal-cont-bottom-last-item">
              <p>Стоимость 1 токена</p>
              <span>
                {tokenData?.token_cost} {tokenData?.currency}
              </span>
            </div>
            <div className="tokennevmodal-cont-bottom-last-item">
              <p>Годовая ставка, %</p>
              <span>{tokenData?.percent}</span>
            </div>
            <div className="tokennevmodal-cont-bottom-last-item">
              <p>Всего токенов, шт</p>
              <span>{tokenData?.tokens_count}</span>
            </div>
            <div className="tokennevmodal-cont-bottom-last-item">
              <p>Свободные токены для погашения</p>
              <span>{tokenData?.tokens_for_redemption}</span>
            </div>
            <div className="tokennevmodal-cont-bottom-last-item">
              <p>Период подачи заявок</p>
              <span>
                {formatDate(tokenData?.request_from)} –{" "}
                {formatDate(tokenData?.request_to)}
              </span>
            </div>
            <div className="tokennevmodal-cont-bottom-last-item">
              <p>Период погашения заявок</p>
              <span>
                {formatDate(tokenData?.redemption_from)} –{" "}
                {formatDate(tokenData?.redemption_to)}
              </span>
            </div>
          </div>
          <div className="tokennevmodal-cont-bottom-btn">
            <button type="button" onClick={tokennevmodalnone}>
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toknewmodal;
