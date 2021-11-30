import Dropdown from 'antd/lib/dropdown';
import React from 'react';
import Wallettableblock from '/components/wallettable/item/index';
import { Menu, Tabs } from "antd";
import Filter from "../../modals/filtermodal";
const { TabPane2 } = Tabs;
const menu2 = (
    <Menu>
        <Menu.Item>
            <div className="nav-choose_lang">
                <span>Главная</span>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="nav-choose_lang">
                <span>О Компании</span>
            </div>
        </Menu.Item>
    </Menu>
);

const menu1 = (
    <Menu>
        <Menu.Item>
            <div className="nav-choose_lang">
                <span>Главная</span>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="nav-choose_lang">
                <span>О Компании</span>
            </div>
        </Menu.Item>
    </Menu>
);

const Wallettable = ({title, link, menu1tit, menu1titp, menu2tit, menu2titp}) => {

    function openModalFilters() {
        document.getElementById('filter').style.display = "block";
    }

    return (
        <div className='tokens-tab'>
            <Filter />
            <div className='tokens-tab-cont'>
              <div className='tokens-tab-cont-title'>
                <div className='tokens-tab-cont-title-left'>
                  <h1>{title}</h1>
                  <a href="tarif">{link}</a>
                </div>
                <div className='tokens-tab-cont-title-right'>
                  <Dropdown overlay={menu1}>
                      <div className='tokens-tab-cont-title-right-item' onClick={openModalFilters}>
                          <p>{menu1tit}</p>
                          <span>{menu1titp}</span>
                          <img src="/img/arrow-select.png" />
                      </div>
                  </Dropdown>
                  <Dropdown overlay={menu2}>
                      <div className='tokens-tab-cont-title-right-item'>
                          <p>{menu2tit}</p>
                          <span>{menu2titp}</span>
                          <img src="/img/arrow-select.png" />
                      </div>
                  </Dropdown>
                </div>
              </div>
              <Wallettableblock />
            </div>
        </div>
    )
}

export default Wallettable;
