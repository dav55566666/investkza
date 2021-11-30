import Dropdown from 'antd/lib/dropdown';
import React from 'react';Pagination
import {Tabs} from "antd";
import {Pagination} from "antd";
const Tarifitem = ({children,imglink,imgtext}) => {
    return (
      <div className="tarif-cont-flex-item">
        <div className="tarif-cont-flex-item-img">
          <img src={imglink} />
          <p>{imgtext}</p>
        </div>
        <div className="tarif-cont-flex-item-right">
          {children}
        </div>
      </div>
    );
}

export default Tarifitem;
