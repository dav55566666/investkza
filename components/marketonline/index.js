import Dropdown from 'antd/lib/dropdown';
import React from 'react';
import { Tabs } from "antd";
import { Pagination } from "antd";
import { Menu } from "antd";
const News = () => {
  return (
    <div className="marketonline" >
      <div className="marketonline-cont">
        <div className="marketonline-cont-flex">
          <div className="marketonline-cont-flex-item">
            <div className="marketonline-cont-flex-item-img">
              <img src="/img/news.png" />
            </div>
            <div className="marketonline-cont-flex-item-text">
              <div className="marketonline-cont-flex-item-info">
                <h4>Avito</h4>
                <p>Интернет-сервис для размещения объявлений о товарах, вакансиях и резюме на рынке труда, а также услугах от частных лиц и компаний.</p>
              </div>
              <div className="marketonline-cont-flex-item-link">
                <a>https://www.avito.ru</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default News;
