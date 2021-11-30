import React from 'react';
import WallettableTitle from './tabe-title/index';
import WallettableTitletd from './tabe-title/tabtitletd';
import Wallettableitem from './tabe-item';

const Wallettableblock = () => (
  <div className="tokens-tab-cont-table">
    <table>
      <tbody>
        <WallettableTitle>
          <WallettableTitletd tdtext="Токен Компания" />
          <WallettableTitletd tdtext="Номинальная стоимость" />
          <WallettableTitletd tdtext="Годовая ставка" />
          <WallettableTitletd tdtext="Свободные токены для вторичного рынка, шт." />
          <WallettableTitletd tdtext="" />
          <WallettableTitletd tdtext="" />
        </WallettableTitle>
        <Wallettableitem tokenp="Bereg_ (USD_5)" valyutp="100 USD.sc" tokens="ЗАО «Чистый Берег»" price="5,73%" dedline="5 0000" />
        <Wallettableitem tokenp="Bereg_ (USD_5)" valyutp="100 USD.sc" tokens="ЗАО «Чистый Берег»" price="5,73%" dedline="5 0000" />
        <Wallettableitem tokenp="Bereg_ (USD_5)" valyutp="100 USD.sc" tokens="ЗАО «Чистый Берег»" price="5,73%" dedline="5 0000" />
        <Wallettableitem tokenp="Bereg_ (USD_5)" valyutp="100 USD.sc" tokens="ЗАО «Чистый Берег»" price="5,73%" dedline="5 0000" />
        <Wallettableitem tokenp="Bereg_ (USD_5)" valyutp="100 USD.sc" tokens="ЗАО «Чистый Берег»" price="5,73%" dedline="5 0000" />
        <Wallettableitem tokenp="Bereg_ (USD_5)" valyutp="100 USD.sc" tokens="ЗАО «Чистый Берег»" price="5,73%" dedline="5 0000" />
        <Wallettableitem tokenp="Bereg_ (USD_5)" valyutp="100 USD.sc" tokens="ЗАО «Чистый Берег»" price="5,73%" dedline="5 0000" />
      </tbody>
    </table>
  </div>
);

export default Wallettableblock;
