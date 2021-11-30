import React from 'react';
import Tarifmodal from "/components/tarifmodal"
import { Dropdown, Menu } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a href="usertokens">Токены</a>
    </Menu.Item>
    <Menu.Item>
      <a href="wallet">Кошелек</a>
    </Menu.Item>
    <Menu.Item>
      <a href="anket">Анкета</a>
    </Menu.Item>
    <Menu.Item>
      <a href="ref">Реферальная программа</a>
    </Menu.Item>
    <Menu.Item>
      <a href="tokens">Досрочное погашение</a>
    </Menu.Item>
    <Menu.Item>
      <a href="rinok">Вторичный рынок</a>
    </Menu.Item>
    <Menu.Item>
      <a href="usermenu">Помощь</a>
    </Menu.Item>
  </Menu>
)

const SupportHeader = ({ page }) => {

  const getCurrentPage = (n) => {
    if (n === page) {
      return { display: 'block' }
    }
  } 

  return (
    <div className="support-heder">
      <Tarifmodal />
      <div className="support-heder-cont">
        <div style={getCurrentPage('tokens')} className={`support-heder-cont-item ${page === 'tokens' ? 'support-heder-cont-item-active' : ''}`}>
          <img src="/img/tokens.png" alt="" />
          <a href="usertokens">Токены</a>
        </div>
        <div style={getCurrentPage('wallet')} className={`support-heder-cont-item ${page === 'wallet' ? 'support-heder-cont-item-active' : ''}`}>
          <img src="/img/koshel.png" alt="" />
          <a href="wallet">Кошелек</a>
        </div>
        <div style={getCurrentPage('anketa')} className={`support-heder-cont-item ${page === 'anketa' ? 'support-heder-cont-item-active' : ''}`}>
          <img src="/img/anketa.png" alt="" />
          <a href="anket">Анкета</a>
        </div>
        <div style={getCurrentPage('ref')} className={`support-heder-cont-item ${page === 'ref' ? 'support-heder-cont-item-active' : ''}`}>
          <img src="/img/anketa.png" alt="" />
          <a href="ref">Реферальная программа</a>
        </div>
        <div style={getCurrentPage('pogashenie')} className={`support-heder-cont-item ${page === 'pogashenie' ? 'support-heder-cont-item-active' : ''}`}>
          <img src="/img/dosroch.png" alt="" />
          <a href="tokens">Досрочное погашение</a>
        </div>
        <div style={getCurrentPage('rinok')} className={`support-heder-cont-item ${page === 'rinok' ? 'support-heder-cont-item-active' : ''}`}>
          <img src="/img/rinok.png" alt="" />
          <a href="rinok">Вторичный рынок</a>
        </div>
        <div style={getCurrentPage('help')} className={`support-heder-cont-item ${page === 'help' ? 'support-heder-cont-item-active' : ''}`}>
          <img src="/img/help.png" alt="" />
          <a href="usermenu">Помощь</a>
        </div>
      </div>
      <Dropdown overlay={menu} trigger="click" placement="bottomRight">
        <button type="button" className="toggle-submenu"><img src="/img/arrow-select.png" alt="" draggable="false" /></button>
      </Dropdown>
    </div>
  );
}

export default SupportHeader;
