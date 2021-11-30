import Dropdown from 'antd/lib/dropdown';
import React from 'react';
import { Tabs } from "antd";
import { Pagination } from "antd";
const PartnerNew = () => {
  return (
    <div className="partner-new" >
      <div className="partner-new-cont">
        <div className="partner-new-cont-left">
          <h2> Зарабатывайте от 15% до 30%
                <span>от всех комиссий</span>
          </h2>
        </div>
        <div className="partner-new-cont-right">
          <p>Инвестируйте в крупнейшие компании, получайте стабильный доход</p>
          <button>Стать партнером</button>
        </div>
      </div>
    </div>
  );
}

export default PartnerNew;
