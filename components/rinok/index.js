import React from "react";
import { Tabs } from "antd";
import MyTokens from "./MyTokens";
import Rinoktable from "../rinoktab";
import SellTokens from "./SellTokens";
import BuyTokens from "./BuyTokens";
const { TabPane } = Tabs;

const Rinok = () => {
  return (
    <div className="wallet walletrin">
      <div className="wallet-cont">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Мои токены" key="1">
            <MyTokens />
          </TabPane>
          <TabPane tab="Мои заявки" key="2">
            <Rinoktable />
          </TabPane>
          <TabPane tab="Продать" key="3">
            <SellTokens />
          </TabPane>
          <TabPane tab="Купить" key="4">
            <BuyTokens />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Rinok;
