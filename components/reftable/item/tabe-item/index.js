import Dropdown from 'antd/lib/dropdown';
import React from 'react';
import { Menu } from "antd";
function zayavmodalorderopen() {
   document.getElementById('zayavmodalorder').style.display = "block";
}
function zayavbuyopen() {
  document.getElementById('zayavbuy').style.display = "block";
}
function zayavpronone() {
 document.getElementById('zayavpro').style.display = "block";
}
const Reftableitem  = ({itemwidth,tokenp,tokens,valyutp,valyuts,price,dedline,colv,colp,cold}) => {
    return (
      <tr className="tabitemtr walletitemtr walletitemtr4">
        <td>
          <p>{tokenp}</p>
          <span>{tokens}</span>
        </td>
        <td>
          <p>{valyutp}</p>
          <span>{valyuts}</span>
        </td>
        <td>
          <p>{price}</p>
        </td>
        <td>
          <p>{dedline}</p>
        </td>
      </tr>
    )
}

export default Reftableitem ;
