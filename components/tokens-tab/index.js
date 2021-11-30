import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Dropdown, Pagination } from "antd";
import { Menu, Tabs } from "antd";
import TokensTabTitle from "/components/tokens-tab/item/tabe-title/index";
import TokensTabTitletd from "/components/tokens-tab/item/tabe-title/tabtitletd";
import TokensTabitem from "/components/tokens-tab/item/tabe-item";
import Winmodal from "/components/winmodal";
import { isAuthorizated, getToken, logout } from "../../utils/auth";
import Modal from "./modal/Modal";
const { TabPane } = Tabs;

const sorting_menu = [
  { value: "", text: "по популярности" },
  { value: "by_price_hl", text: "по цене по возр." },
  { value: "by_price_lh", text: "по цене по уб." },
  { value: "by_circulation_hl", text: "срок токена по возр." },
  { value: "by_circulation_lh", text: "срок токена по уб." },
];

const counting_menu = [
  { value: 10, text: "10" },
  { value: 15, text: "15" },
  { value: 20, text: "20" },
  { value: 25, text: "25" },
];

function opentokenmodalmodal() {
  document.getElementById("winmodal").style.display = "block";
}

const TokensTab = () => {
  const [myTokens, setMyTokens] = useState("1");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [sorting, setSorting] = useState({
    v: sorting_menu[0].value,
    t: sorting_menu[0].text,
  });
  const [counting, setCounting] = useState({
    v: counting_menu[0].value,
    t: counting_menu[0].text,
  });
  const [perPage, setPerPage] = useState(counting.v);
  const [userData, setUserData] = useState([]);
  const [tokenId, setTokenId] = useState(undefined);
  const [sortSettings, setSortSettings] = useState({
    byCurrency: "all",
    byPrice: "all",
    byCirculation: "all",
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isAuthorizated()) {
      window.location.href = "https://digital-investor.kz/";
    }
  }, []);

  const getData = (url, setStatFunc) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
        Accept: "application/json",
      },
      body: JSON.stringify({
        page: currentPage,
        per_page: perPage,
        by_currency: sortSettings.byCurrency,
        by_price: sortSettings.byPrice,
        by_circulation: sortSettings.byCirculation,
      }),
    })
      .then((res) => {
        if (res.status === 401) {
          logout();
        }
        return res;
      })
      .then((data) => data.json())
      .then(({ data }) => {
        data?.total_count && setTotalCount(data?.total_count);
        setStatFunc(data?.tokens_data);
      });
  };

  const handleSort = (value) => {
    switch (value) {
      case "by_price_hl":
        setSortSettings({
          byCurrency: "all",
          byPrice: "min",
          byCirculation: "all",
        });
        break;
      case "by_price_lh":
        setSortSettings({
          byCurrency: "all",
          byPrice: "max",
          byCirculation: "all",
        });
        break;
      case "by_circulation_hl":
        setSortSettings({
          byCurrency: "all",
          byPrice: "all",
          byCirculation: "max",
        });
        break;
      case "by_circulation_lh":
        setSortSettings({
          byCurrency: "all",
          byPrice: "all",
          byCirculation: "min",
        });
        break;
    }
  };

  useEffect(() => {
    myTokens === "1" &&
      getData("https://api.digital-investor.kz/api/get-tokens", setData);
    myTokens === "2" &&
      getData(
        "https://api.digital-investor.kz/api/get-user-tokens",
        setUserData
      );
  }, [sortSettings, perPage, currentPage, myTokens, sorting, counting]);

  const handleChange = (e) => {
    setCurrentPage(e);
  };

  const handleSortingClick = (i) => {
    setSorting({ v: i.value, t: i.text });
    handleSort(i.value);
  };

  const handleCountingClick = (i) => {
    setCounting({ v: i.value, t: i.text });
    setPerPage(i.value);
  };

  const handleClick = (id) => {
    setTokenId(id);
    setOpen(true);
  };

  const sortingMenu = (
    <Menu>
      {sorting_menu
        .filter((i) => i.value)
        .map((i, index) => (
          <Menu.Item key={index} onClick={() => handleSortingClick(i)}>
            <div className="nav-choose-lang">
              <span>{i.text}</span>
            </div>
          </Menu.Item>
        ))}
    </Menu>
  );

  const countingMenu = (
    <Menu>
      {counting_menu.map((i, index) => (
        <Menu.Item key={index} onClick={() => handleCountingClick(i)}>
          <div className="nav-choose-lang">
            <span>{i.text}</span>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="tokens-tab">
      {open && <Modal id={tokenId} onClose={() => setOpen(false)} />}
      <Winmodal tokenId={tokenId} />
      <div className="tokens-tab-cont">
        <Tabs
          defaultActiveKey="1"
          onChange={(e) => {
            setCurrentPage(1);
            setMyTokens(e);
          }}
        >
          <TabPane tab="Купить токены" key="1">
            <div className="tokens-tab-cont-title">
              <div className="tokens-tab-cont-title-left">
                <h1>Предложения токенов</h1>
                <a href="tarif">Условия ввода и вывода денежных средств</a>
              </div>
              <div className="tokens-tab-cont-title-right">
                <Dropdown overlay={sortingMenu}>
                  <div className="tokens-tab-cont-title-right-item">
                    <p>Сортировка:</p>
                    <span>{sorting.t}</span>
                    <img src="/img/arrow-select.png" />
                  </div>
                </Dropdown>
                <Dropdown overlay={countingMenu}>
                  <div className="tokens-tab-cont-title-right-item">
                    <p>Предложений на странице</p>
                    <span>{counting.t}</span>
                    <img src="/img/arrow-select.png" />
                  </div>
                </Dropdown>
              </div>
            </div>
            <div className="tokens-tab-cont-table">
              <table>
                <tbody>
                  <TokensTabTitle>
                    <TokensTabTitletd tdtext={"Токен Компания"} />
                    <TokensTabTitletd tdtext={"Валюта Годовая ставка"} />
                    <TokensTabTitletd tdtext={"Стоимость 1 токена"} />
                    <TokensTabTitletd tdtext={"Срок обращения"} />
                    <TokensTabTitletd
                      tdtext={
                        "Количество токенов: выпущено / продано / доступно"
                      }
                    />
                    <TokensTabTitletd tdtext={""} />
                  </TokensTabTitle>
                  {data &&
                    data.map((row) => {
                      return (
                        <TokensTabitem
                          key={uuidv4()}
                          itemwidth={"62%"}
                          logo={row.company_logo}
                          tokenp={row.company_full_name}
                          tokens={row.company_short_name}
                          valyutp={row.currency + ".sc"}
                          valyuts={`${row.percent}%`}
                          price={`${row.token_cost} ${row.currency}.sc`}
                          dedline={`${row.term_of_circulation} дней`}
                          colv={row.tokens_count + " /"}
                          colp={row.sold_tokens + " /"}
                          cold={row.available_tokens}
                          btn={
                            <a
                              onClick={() => {
                                setTokenId(row.token_id);
                                opentokenmodalmodal();
                              }}
                            >
                              Купить
                            </a>
                          }
                        />
                      );
                    })}
                </tbody>
              </table>
              <Pagination
                pageSize={perPage}
                onChange={handleChange}
                defaultCurrent={1}
                current={currentPage}
                total={totalCount}
                style={{ marginTop: "20px", textAlign: "center" }}
              />
            </div>
          </TabPane>
          <TabPane tab="Мои токены" key="2">
            <div className="tokens-tab-cont-title">
              <div className="tokens-tab-cont-title-left">
                <h1>Предложения токенов</h1>
                <a href="tarif">словия ввода и вывода денежных средств</a>
              </div>
              <div className="tokens-tab-cont-title-right">
                <Dropdown overlay={sortingMenu}>
                  <div className="tokens-tab-cont-title-right-item">
                    <p>Сортировка:</p>
                    <span>{sorting.t}</span>
                    <img src="/img/arrow-select.png" />
                  </div>
                </Dropdown>
                <Dropdown overlay={countingMenu}>
                  <div className="tokens-tab-cont-title-right-item">
                    <p>Предложений на странице</p>
                    <span>{counting.t}</span>
                    <img src="/img/arrow-select.png" />
                  </div>
                </Dropdown>
              </div>
            </div>
            <div className="tokens-tab-cont-table">
              <table>
                <tbody>
                  <TokensTabTitle>
                    <TokensTabTitletd tdtext={"Токен Компания"} />
                    <TokensTabTitletd tdtext={"Валюта Годовая ставка"} />
                    <TokensTabTitletd tdtext={"Стоимость 1 токена"} />
                    <TokensTabTitletd tdtext={"Срок обращения"} />
                    <TokensTabTitletd tdtext={"Сумма"} my={true} />
                    <TokensTabTitletd tdtext={"Кол-во"} />
                    <TokensTabTitletd tdtext={"Дата"} />
                    <TokensTabTitletd
                      tdtext={"Кол-во токенов:выпущено/ продано/ доступно"}
                    />
                    <TokensTabTitletd tdtext={""} />
                  </TokensTabTitle>
                  {!!userData &&
                    userData.map((row) => {
                      return (
                        <TokensTabitem
                          key={uuidv4()}
                          my={true}
                          itemwidth={"62%"}
                          logo={row.company_logo}
                          tokenp={row.company_full_name}
                          tokens={row.company_short_name}
                          valyutp={row.currency + ".sc"}
                          valyuts={`${row.percent}%`}
                          price={`${row.token_cost} ${row.currency}.sc`}
                          dedline={`${row.term_of_circulation} дней`}
                          val={`${parseInt(row.token_cost) * parseInt(row.user_tokens_count)} ${row.currency}`}
                          howMuch={row.how_much}
                          count={row.user_tokens_count}
                          buyDate={row.buy_date}
                          colv={row.tokens_count + " /"}
                          colp={row.sold_tokens + " /"}
                          cold={row.available_tokens}
                          btn={
                            <a onClick={() => handleClick(row.token_id)}>
                              подробнее
                            </a>
                          }
                        />
                      );
                    })}
                </tbody>
              </table>
              <Pagination
                pageSize={perPage}
                onChange={handleChange}
                defaultCurrent={1}
                current={currentPage}
                total={totalCount}
                style={{ marginTop: "20px", textAlign: "center" }}
              />
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default TokensTab;
