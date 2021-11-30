import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Token from "../../uikit/token";
import { Tabs } from "antd";
const { TabPane } = Tabs;
import Button from "../../uikit/button";
import Toknewmodal from "/components/tokenmodalnev";
import Zayavmodal from "/components/zayavmodal";
import { getToken } from "../../utils/auth";

const TokensPage = () => {
  const [tab, setTab] = useState("1");
  const [user_token_id, set_user_token_id] = useState(null);
  const [earlyRedemptionData, setEarlyRedemptionData] = useState();
  const [selectedTokenId, setSelectedTokenId] = useState(null);

  useEffect(() => {
    const url =
      tab === "1"
        ? "https://api.digital-investor.kz/api/get-early-redemption"
        : "https://api.digital-investor.kz/api/get-user-redemptions";

    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setEarlyRedemptionData(data);
      });
  }, [tab]);

  const handleTabChange = (e) => {
    setTab(e);
  };

  function openzayavmodal(d) {
    document.getElementById("zayavmodal").style.display = "block";
    setSelectedTokenId(d);
  }

  const opentoknewmodal = (d) => {
    document.getElementById("tokennevmodal").style.display = "block";
    setSelectedTokenId(d);
  };

  return (
    <div className="tokens-wrapper">
      <Toknewmodal token_id={selectedTokenId} />
      <Zayavmodal token_id={selectedTokenId} user_token_id={user_token_id} />
      <div className="container">
        <Tabs defaultActiveKey="1" onChange={handleTabChange}>
          <TabPane tab="Токены к досрочному погашению " key="1">
            <h4 className="tokens__heading">Токены к досрочному погашению </h4>
            <a href="tarif" className="tokens__infolink">
              Условия ввода и вывода денежных средств
            </a>
            <div className="tokensBlock">
              {earlyRedemptionData &&
                new Array(Math.ceil(earlyRedemptionData.length / 4))
                  .fill(0)
                  .map((_, i) => {
                    return (
                      <div key={uuidv4()} className="tokensBlock-row">
                        {earlyRedemptionData
                          .slice(i * 4, (i + 1) * 4)
                          .map((el) => {
                            return (
                              <Token
                                key={uuidv4()}
                                path={el.company_logo}
                                name={el?.token_name}
                                production={el?.company_name}
                                saled={el?.buy_tokens_count}
                                torepayment={el?.my_repayment_tokens_count}
                                btn={
                                  <Button
                                    onClick={() => opentoknewmodal(el.token_id)}
                                    children="Подробнее"
                                    color="submit"
                                  />
                                }
                                btn2={
                                  <Button
                                    onClick={() => {
                                      openzayavmodal(el.token_id);
                                      set_user_token_id(el?.user_token_id)
                                    }}
                                    children="Подать заявку"
                                    color="submit"
                                  />
                                }
                              />
                            );
                          })}
                      </div>
                    );
                  })}
            </div>
          </TabPane>
          <TabPane tab="Мои заявки на досрочное погашение" key="2">
            <h4 className="tokens__heading">
              Мои заявки на досрочное погашение{" "}
            </h4>
            <a href="tarif" className="tokens__infolink">
              Условия ввода и вывода денежных средств
            </a>
            <div className="tokensBlock">
              {earlyRedemptionData &&
                new Array(Math.ceil(earlyRedemptionData.length / 4))
                  .fill(0)
                  .map((_, i) => {
                    return (
                      <div key={uuidv4()} className="tokensBlock-row">
                        {earlyRedemptionData
                          .slice(i * 4, (i + 1) * 4)
                          .map((el) => {
                            return (
                              <Token
                                key={uuidv4()}
                                path={el?.company_logo}
                                name={el?.token_name}
                                production={el?.company_name}
                                saled={el?.buy_tokens_count}
                                torepayment={el?.token_count}
                                btn={
                                  <Button
                                    onClick={() => opentoknewmodal(el.token_id)}
                                    children="Подробнее"
                                    color="submit"
                                  />
                                }
                              />
                            );
                          })}
                      </div>
                    );
                  })}
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default TokensPage;
