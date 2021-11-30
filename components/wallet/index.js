import { v4 as uuidv4 } from "uuid";
import Withdraw from "/components/wallet/withdraw";
import Withdraww from "/components/wallet/withdraw2";
import RequestsItem from "/components/wallet/requests";
import SetingsItem from "/components/wallet/setings";
import Wallettable2 from "/components/wallettableasd";
import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { getToken } from "../../utils/auth";
const { TabPane } = Tabs;

const Wallet = ({ onTopopClick, onTopopvClick }) => {
  const [data, setData] = useState();
  const [requestsData, setRequestsData] = useState();
  const [cardsData, setCardsData] = useState({
    kzt_sc: [null, null],
    usd_sc: [null, null],
    rub_sc: [null, null],
    euro_sc: [null, null],
  });
  const [bik1Local, setBik1Local] = useState({});
  const [bik2Local, setBik2Local] = useState({});

  const convertCardsData = (oldCardsData) => {
    const newCardsData = {
      kzt_sc: [null, null],
      usd_sc: [null, null],
      rub_sc: [null, null],
      euro_sc: [null, null],
    };

    oldCardsData.forEach((cardData) => {
      newCardsData[cardData["currency"]] = [
        cardData["card_number"],
        cardData["bic"],
      ];
    });
    return newCardsData;
  };

  useEffect(() => {
    fetch("https://api.digital-investor.kz/api/get-user-wallet", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + getToken(),
      },
    })
      .then((d) => d.json())
      .then(({ data }) => setData(data));

    fetch("https://api.digital-investor.kz/api/user-output-requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + getToken(),
      },
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setRequestsData(data);
      });

    fetch("https://api.digital-investor.kz/api/get-user-cards", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setCardsData(convertCardsData(data));
      });
  }, []);

  const onSettingsSave = (e) => {
    e.preventDefault();

    const params = {};

    Object.keys(bik1Local).forEach((key) => {
      if (bik1Local[key] && bik2Local[key]) {
        params[`card_number_${key}`] = bik1Local[key];
        params[`bic_${key}`] = bik2Local[key];
      }
    });
    if (Object.keys(params).length > 0) {
      fetch("https://api.digital-investor.kz/api/save-card", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + getToken(),
        },
        body: JSON.stringify(params),
      });
    }
  };

  return (
    <div className="wallet wallet2">
      <div className="wallet-cont">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Пополнить" key="1">
            <div className="wallet-cont-title">
              <h2>Пополнение кошелька</h2>
              <a href="tarif">Условия ввода и вывода денежных средств</a>
            </div>
            <div className="wallet-cont-flex-withdraw">
              <Withdraw
                onTopopClick={onTopopClick}
                price={data?.euro_sc}
                currency="EUR"
                blocked={"Заблокировано"}
                blockedtotal={data?.blocked_euro_sc}
                btntext={"Пополнить"}
              />
              <Withdraw
                onTopopClick={onTopopClick}
                price={data?.kzt_sc}
                currency="KZT"
                blocked={"Заблокировано"}
                blockedtotal={data?.blocked_kzt_sc}
                btntext={"Пополнить"}
              />
              <Withdraw
                onTopopClick={onTopopClick}
                price={data?.rub_sc}
                currency="RUB"
                blocked={"Заблокировано"}
                blockedtotal={data?.blocked_rub_sc}
                btntext={"Пополнить"}
              />
              <Withdraw
                onTopopClick={onTopopClick}
                price={data?.usd_sc}
                currency="USD"
                blocked={"Заблокировано"}
                blockedtotal={data?.blocked_usd_sc}
                btntext={"Пополнить"}
              />
            </div>
          </TabPane>
          <TabPane tab="Вывести" key="2">
            <div className="wallet-cont-title">
              <h2>Выведение из кошелька</h2>
              <a href="tarif">Условия ввода и вывода денежных средств</a>
            </div>
            <div className="wallet-cont-flex-withdraw">
              <Withdraww
                onTopopvClick={onTopopvClick}
                price={data?.euro_sc}
                currency="EUR"
                blocked={"Заблокировано"}
                blockedtotal={data?.blocked_euro_sc}
                btntext={"Вывести"}
              />
              <Withdraww
                onTopopvClick={onTopopvClick}
                price={data?.kzt_sc}
                currency="KZT"
                blocked={"Заблокировано"}
                blockedtotal={data?.blocked_kzt_sc}
                btntext={"Вывести"}
              />
              <Withdraww
                onTopopvClick={onTopopvClick}
                price={data?.rub_sc}
                currency="RUB"
                blocked={"Заблокировано"}
                blockedtotal={data?.blocked_rub_sc}
                btntext={"Вывести"}
              />
              <Withdraww
                onTopopvClick={onTopopvClick}
                price={data?.usd_sc}
                currency="USD"
                blocked={"Заблокировано"}
                blockedtotal={data?.blocked_usd_sc}
                btntext={"Вывести"}
              />
            </div>
          </TabPane>
          <TabPane tab="История операций" key="3">
            <div className="walletstoritable">
              <Wallettable2
                title={"Завершенные операции"}
                link={"Условия ввода и вывода денежных средств"}
                menu1tit={"Показать фильтры"}
                menu2tit={"Выбрать период"}
              />
            </div>
          </TabPane>
          <TabPane tab="Заявки на вывод" key="4">
            <div className="wallet-cont-title">
              <h2>Заявки на вывод средств</h2>
              <a href="tarif">Условия ввода и вывода денежных средств</a>
            </div>
            <div className="wallet-cont-flex-requests">
              {requestsData &&
                requestsData.map((requestsItem) => {
                  return (
                    <RequestsItem
                      key={uuidv4()}
                      status={requestsItem.is_accept}
                      price={`${requestsItem.output_amount} ${requestsItem.currency}`}
                      blocked={"Вывод"}
                      blockedtotal={requestsItem.output_time}
                    />
                  );
                })}
            </div>
          </TabPane>
          <TabPane tab="Настройки" key="5">
            <div className="wallet-cont-title">
              <h2>Платежные реквизиты</h2>
              <a href="tarif">Условия ввода и вывода денежных средств</a>
            </div>
            <div className="wallet-cont-setings">
              <p>
                Сохраните платежные реквизиты для автоматического заполнения
                данных при выводе средств.
              </p>
              <SetingsItem
                valyut={"USD.sc"}
                bik1={cardsData["usd_sc"][0]}
                onBik1={(e) => {
                  setBik1Local((bik1Local) => {
                    return { ...bik1Local, usd: e.target.value };
                  });
                }}
                bik2={cardsData["usd_sc"][1]}
                onBik2={(e) => {
                  setBik2Local((bik2Local) => {
                    return { ...bik2Local, usd: e.target.value };
                  });
                }}
                biktitle="USD банка"
              />
              <SetingsItem
                valyut={"EUR.sc"}
                bik1={cardsData["euro_sc"][0]}
                onBik1={(e) => {
                  setBik1Local((bik1Local) => {
                    return { ...bik1Local, euro: e.target.value };
                  });
                }}
                bik2={cardsData["euro_sc"][1]}
                onBik2={(e) => {
                  setBik2Local((bik2Local) => {
                    return { ...bik2Local, euro: e.target.value };
                  });
                }}
                biktitle={"EUR банка"}
              />
              <SetingsItem
                valyut={"RUB.sc"}
                bik1={cardsData["rub_sc"][0]}
                onBik1={(e) => {
                  setBik1Local((bik1Local) => {
                    return { ...bik1Local, rub: e.target.value };
                  });
                }}
                bik2={cardsData["rub_sc"][1]}
                onBik2={(e) => {
                  setBik2Local((bik2Local) => {
                    return { ...bik2Local, rub: e.target.value };
                  });
                }}
                biktitle={"RUB банка"}
              />
              <SetingsItem
                valyut={"KZT.sc"}
                bik1={cardsData["kzt_sc"][0]}
                onBik1={(e) => {
                  setBik1Local((bik1Local) => {
                    return { ...bik1Local, kzt: e.target.value };
                  });
                }}
                bik2={cardsData["kzt_sc"][1]}
                onBik2={(e) => {
                  setBik2Local((bik2Local) => {
                    return { ...bik2Local, kzt: e.target.value };
                  });
                }}
                biktitle={"KZT банка"}
              />
              <a onClick={onSettingsSave}>Сохранить</a>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Wallet;
