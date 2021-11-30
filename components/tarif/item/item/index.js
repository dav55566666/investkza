import Dropdown from 'antd/lib/dropdown';
import React from 'react';
import {Tabs} from "antd";
import {Pagination} from "antd";
const Tarifitemright = ({firsttext,firstlink,firstspan,lastspan}) => {
    return (
      <div className="tarif-cont-flex-item-right-line">
        <div className="tarif-cont-flex-item-right-line-first">
          <p>{firsttext}</p>
          <a>{firstlink}</a>
          <span>{firstspan}</span>
        </div>
        <div className="tarif-cont-flex-item-right-line-last">
          <span>{lastspan}</span>
        </div>
      </div>
    );
}

export default Tarifitemright;
