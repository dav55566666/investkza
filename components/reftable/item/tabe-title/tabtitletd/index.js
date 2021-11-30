import Dropdown from 'antd/lib/dropdown';
import React from 'react';
import { Menu } from "antd";
const ReftableTitletd = ({tdtext,children}) => {
    return (
      <td className="tdref">
        <p>{tdtext}<svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.20801 15.042L5.08301 15.198L0.0830078 11.198L1.33301 9.63599L5.20801 12.736L9.08301 9.63599L10.333 11.198L5.33301 15.198L5.20801 15.042ZM5.20801 3.09698L1.33301 6.19702L0.0830078 4.63501L5.08301 0.63501L5.20801 0.791016L5.33301 0.63501L10.333 4.63501L9.08301 6.19702L5.20801 3.09698Z" fill="#4AB294"/>
</svg>
</p>
      </td>
    )
}

export default ReftableTitletd;
