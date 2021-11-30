import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Info from "../../uikit/info";
import User from "../../uikit/user";
import CollapseItem from "../../uikit/collapse";
import CooperationCarousel from "../cooperationCarousel";

const arrayTo2dArray = (array, n) => {
  const result = [];
  for (let i = 0; i < Math.ceil(array.length / n); i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      if (array[i * n + j]) {
        result[i][j] = array[i * n + j];
      }
    }
  }
  return result;
};

const CooperationPage = () => {
  const [personData, setPersonData] = useState([]);
  const [vacancies, setVacancies] = useState([]);
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    fetch("https://api.digital-investor.kz/api/company-page-info")
      .then((response) => response.json())
      .then((json) => {
        setDocs(json.data.law_documentations);
        setVacancies(json.data.vacancies);
        setPersonData(arrayTo2dArray(json.data.personal, 4));
      });
  }, []);

  const cards = [
    {
      image: "img/sliderItem1.png",
      name: "Энэка",
    },
    {
      image: "img/sliderItem2.png",
      name: "Хлебозавод № 10",
    },
    {
      image: "img/sliderItem3.png",
      name: "Открытая Линия ",
    },
    {
      image: "img/sliderItem4.png",
      name: "ГлавИндустрияСтрой",
    },
    {
      image: "img/sliderItem1.png",
      name: "Энэка",
    },
    {
      image: "img/sliderItem2.png",
      name: "Хлебозавод № 10",
    },
    {
      image: "img/sliderItem3.png",
      name: "Открытая Линия ",
    },
    {
      image: "img/sliderItem4.png",
      name: "ГлавИндустрияСтрой",
    },
  ];

  return (
    <div className="cooperationPage">
      <div className="container">
        <div className="company">
          <h1>О компании</h1>
          <p>
            DIGITAL INVEST MARKET Ltd. – цифровая инвестиционная
            онлайн-платформа, на которой компании эмитенты выпускают токены –
            цифровой аналог депозитного счета. Суть работы очень проста и
            напоминает традиционное ICO. Токен — это цифровая ценная бумага,
            аналог облигации. Компания эмитент платит инвестору процент за
            владение его средствами. А когда срок обращения заканчивается,
            компания возвращает деньги инвестору. DIGITAL INVEST MARKET Ltd.-
            уникальная платформа имеющая вторичный рынок, где один участник свой
            токен (цифровой актив) имеет возможность выставить на продажу,
            передать, подарить другому участнику платформы. Ввод и вывод средств
            осуществляется с помощью банковской карточки.
          </p>
        </div>
        <div className="infoBlock">
          <div className="infoBlock-item">
            <Info
              year="2017"
              month="Август"
              text="Начинается история компании «Финстор»"
            />
            <Info
              year="2017"
              month="Декабрь"
              text="Компания становится участником Парка высоких технологий"
            />
          </div>
          <div className="infoBlock-item">
            <Info
              year="2018"
              month="Май"
              text="Пропускает первый миллион долларов инвестиций"
            />
            <Info
              year="2020"
              month="Апрель"
              text="Пропускает 13-й миллион долларов инвестиций"
            />
          </div>
        </div>
        <div className="ourTeam">
          <h2 className="title">Наша команда</h2>
          {personData &&
            personData.map((personRow) => {
              return (
                <div key={uuid()} className="ourTeam-row">
                  {personRow.map((person) => {
                    return (
                      <User
                        key={uuid()}
                        img={person.avatar}
                        name={`${person.name} ${person.surname}`}
                        profession={person.position}
                      />
                    );
                  })}
                </div>
              );
            })}
        </div>
        <div className="vacansia">
          <h2 className="title">Вакансии</h2>
          {vacancies &&
            vacancies.map((item, index) => (
              <CollapseItem
                key={index}
                question={item?.title}
                answer={item?.description}
              />
            ))}
        </div>
      </div>
      <div className="carousel">
        <div className="container">
          <h2 className="title">Наши партнёры</h2>
          <CooperationCarousel data={cards} />
        </div>
      </div>
      <div className="container">
        <div className="lawDoc" style={{ paddingBottom: "25px" }}>
          <h2 className="title">Юридическая документация</h2>
          {docs &&
            docs.map((item, index) => (
              <CollapseItem
                key={index}
                question={item?.title}
                answer={item?.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default CooperationPage;
