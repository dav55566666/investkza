import Dropdown from "antd/lib/dropdown";
import React, { useState } from "react";
import { Menu } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <p>2021 год</p>
    </Menu.Item>
    <Menu.Item>
      <p>2021 год</p>
    </Menu.Item>
    <Menu.Item>
      <p>2021 год</p>
    </Menu.Item>
  </Menu>
);

const menu2 = (
  <Menu>
    <Menu.Item>
      <p>Январь</p>
    </Menu.Item>
    <Menu.Item>
      <p>Январь</p>
    </Menu.Item>
    <Menu.Item>
      <p>Январь</p>
    </Menu.Item>
  </Menu>
);
const title = (
  <div className="news-cont-title">
    <h1>Новости</h1>
    <p>
      О Международном финансовом центре «Астана» - «Это уникальный центр на
      экономической карте мира, объединяющий лучший опыт и самые современные
      возможности передовых финансовых центров ... МФЦА предлагает бизнесу
      всеобъемлющий юридический режим привлечения, осуществления и защиты
      инвестиций, основанный на самом удобном для бизнеса праве МФЦА,
      базирующемся на принципах, нормах и прецедентах права Англии и Уэльса
      и/или стандартах ведущих мировых финансовых центров. Независимые органы
      управления МФЦА предоставляют дополнительные гарантии поддержки бизнеса и
      его операций. Суд МФЦА, независимый в своей деятельности и не являющийся
      частью судебной системы Казахстана, состоит из Суда первой инстанции и
      Апелляционного суда. Благоприятный налоговый режим и льготы на
      операционную деятельность помогают снизить издержки, тем самым повышая
      конкурентоспособность компаний, и делают стоимость ведения бизнеса в МФЦА
      привлекательной для наших клиентов. Все инвесторы освобождаются от уплаты
      налогов по дивидендам и доходам по капиталу, полученным в связи с акциями,
      зарегистрированными на бирже, и другими ценными бумагами, размещенными на
      AIX, либо относящимся к другим участникам МФЦА».
    </p>
  </div>
);

const NewsFilter = ({ setData }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      year: "",
      month: "",
      search_text: value,
    };

    fetch("https://api.digital-investor.kz/api/search-news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  };

  return (
    <div className="news-filter">
      <div className="news-cont">
        {title}
        <div className="news-cont-filter">
          <div className="news-cont-filter-left">
            <Dropdown overlay={menu} placement="bottomCenter">
              <div className="news-cont-filter-left-item">
                <p>2021 год</p>
                <img src="/img/arrow-select.png" alt="" />
              </div>
            </Dropdown>
            <Dropdown overlay={menu2} placement="bottomCenter">
              <div className="news-cont-filter-left-item">
                <p>Январь</p>
                <img src="/img/arrow-select.png" alt="" />
              </div>
            </Dropdown>
          </div>
          <div className="news-cont-filter-right">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Поиск..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <input type="submit" value="" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFilter;
