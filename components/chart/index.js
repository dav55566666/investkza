import { Menu } from 'antd';
import Dropdown from 'antd/lib/dropdown';

import React from 'react';

const menu = (
    <Menu>
        <Menu.Item>
            <p>Другие выпуски</p>
        </Menu.Item>
        <Menu.Item>
            <p>Другие выпуски</p>
        </Menu.Item>
        <Menu.Item>
            <p>Другие выпуски</p>
        </Menu.Item>
    </Menu>
);

const Charts = () => (
    <div className="chart">
        <div className="chart-cont">
            <div className="chart-cont-title">
                <h2>Выпуск от 10.02.2021</h2>
                <Dropdown overlay={menu} placement="bottomCenter">
                    <div className="chart-cont-title-item">
                        <p>Другие выпуски</p>
                        <img src="/img/arrow-select.png" alt="" draggable="false" />
                    </div>
                </Dropdown>
            </div>
            <div className="chart-cont-box">
                <div className="chart-cont-box-img">
                    <p>Сравнительный анализ роста стоимости компании</p>
                    <img alt="" src="/img/Graphic.svg" />
                </div>
                <div className="chart-cont-box-bottom">
                    <button type="button">Инвестировать</button>
                    <div className="chart-cont-box-bottom-sites">
                        <p>Следите за новостями</p>
                        <div className="chart-cont-box-bottom-sites-flex">
                            <a href="/">
                                <img src="/img/fbicon.png" alt="" draggable="false" />
                            </a>
                            <a href="/">
                                <img src="/img/twiitericon.png" alt="" draggable="false" />
                            </a>
                            <a href="/">
                                <img src="/img/instacharticon.png" alt="" draggable="false" />
                            </a>
                            <a href="/">
                                <img src="/img/wkcharticon.png" alt="" draggable="false" />
                            </a>
                            <a href="/">
                                <img src="/img/telecharticon.png" alt="" draggable="false" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Charts;
