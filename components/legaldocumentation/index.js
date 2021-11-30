import { Menu } from 'antd';
import Dropdown from 'antd/lib/dropdown';

import React from 'react';

const menu = (
    <Menu>
        <Menu.Item>
            <p>White paper</p>
        </Menu.Item>
        <Menu.Item>
            <p>White paper</p>
        </Menu.Item>
        <Menu.Item>
            <p>White paper</p>
        </Menu.Item>
    </Menu>
);

const menu2 = (
    <Menu>
        <Menu.Item>
            <p>Финансовая отчётность</p>
        </Menu.Item>
        <Menu.Item>
            <p>Финансовая отчётность</p>
        </Menu.Item>
        <Menu.Item>
            <p>Финансовая отчётность</p>
        </Menu.Item>
    </Menu>
);

const NewsFilter = () => {
    return (
        <div className="legaldocumentation-filter">
            <div className="legaldocumentation-cont">
                <div className="legaldocumentation-cont-title">
                    <h2>Юридическая документация</h2>
                </div>
                <div className="legaldocumentation-cont-filter">
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <div className="legaldocumentation-cont-filter-left-item">
                            <img src="/img/arrow-select.png" alt="" />
                            <p>White paper</p>
                        </div>
                    </Dropdown>
                </div>
                <div className="legaldocumentation-cont-filter">
                    <Dropdown overlay={menu2} placement="bottomCenter">
                        <div className="legaldocumentation-cont-filter-left-item">
                            <img src="/img/arrow-select.png" alt="" />
                            <p>Финансовая отчётность</p>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default NewsFilter;
