import React from 'react';
import { Tabs } from "antd";
const { TabPane } = Tabs;

const SubHeader = () => {
  return (
    <div className="support-heder">
      <div className="support-heder-cont">
        <Tabs defaultActiveKey="1">
          <TabPane tab={
            <div className="support-heder-cont-item">
              <img src="/img/tokens.png" alt="" />
              <span>Токены</span>
            </div>
          } key="1">
          </TabPane>
          <TabPane className="support-heder-cont-item" tab={
            <div className="support-heder-cont-item">
              <img src="/img/koshel.png" alt="" />
              <span>Кошелек</span>
            </div>
          } key="2">
          </TabPane>
          <TabPane className="support-heder-cont-item" tab={
            <div className="support-heder-cont-item">
              <img src="/img/anketa.png" alt="" />
              <span>Анкета</span>
            </div>
          } key="3">
          </TabPane>
          <TabPane className="support-heder-cont-item" tab={
            <div className="support-heder-cont-item">
              <img src="/img/analitiks.png" alt="" />
              <span>Аналитика</span>
            </div>
          } key="4">
          </TabPane>
          <TabPane className="support-heder-cont-item" tab={
            <div className="support-heder-cont-item">
              <img src="/img/dosroch.png" alt="" />
              <span>Досрочное погашение</span>
            </div>
          } key="5">
          </TabPane>
          <TabPane className="support-heder-cont-item" tab={
            <div className="support-heder-cont-item">
              <img src="/img/rinok.png" alt="" />
              <span>Вторичный рынок</span>
            </div>
          } key="6">
          </TabPane>
          <TabPane className="support-heder-cont-item" tab={
            <div className="support-heder-cont-item">
              <img src="/img/help.png" alt="" />
              <span>Помощь</span>
            </div>
          } key="7">
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default SubHeader;
