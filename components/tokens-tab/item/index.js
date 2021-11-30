import Dropdown from 'antd/lib/dropdown';
import React from 'react';
import { Menu } from "antd";
import TokensTabTitle from '/components/tokens-tab/item/tabe-title/index';
import TokensTabTitletd  from '/components/tokens-tab/item/tabe-title/tabtitletd';
import TokensTabitem from '/components/tokens-tab/item/tabe-item';
const TokensTabblock = ({menu2titp}) => {
    return (
      <div className='tokens-tab-cont-table'>
        <table>
          <TokensTabTitle>
            <TokensTabTitletd tdtext={"Токен Компания"} />
            <TokensTabTitletd tdtext={"Валюта Годовая ставка"} />
            <TokensTabTitletd tdtext={"Стоимость 1 токена"} />
            <TokensTabTitletd tdtext={"Срок обращения"} />
            <TokensTabTitletd tdtext={"Количество токенов: выпущено / продано / доступно"} />
            <TokensTabTitletd tdtext={""} />
          </TokensTabTitle>
          <TokensTabitem itemwidth={"62%"} tokenp={"Bereg_ (USD_5)"} tokens={"ЗАО «Чистый Берег»"} valyutp={"USD.sc"} valyuts={"6%"} price={"100 USD.sc"} dedline={"1837 дней"} colv={"50 000 /"} colp={"22 000 /"} cold={"28 000"} />
          <TokensTabitem itemwidth={"42%"} tokenp={"Hleb10_ (EUR_7)"} tokens={"«Хлебозавод № 10»"} valyutp={"USD.sc"} valyuts={"10%"} price={"100 USD.sc"} dedline={"1837 дней"} colv={"50 000 /"} colp={"22 000 /"} cold={"28 000"} />
          <TokensTabitem itemwidth={"52%"} tokenp={"Bereg_ (USD_5)"} tokens={"ЗАО «Чистый Берег»"} valyutp={"USD.sc"} valyuts={"6%"} price={"70 EUR.sc"} dedline={"2057 дней"} colv={"50 000 /"} colp={"22 000 /"} cold={"28 000"} />
          <TokensTabitem itemwidth={"72%"} tokenp={"Bereg_ (USD_5)"} tokens={"ЗАО «Чистый Берег»"} valyutp={"USD.sc"} valyuts={"6%"} price={"100 USD.sc"} dedline={"1837 дней"} colv={"50 000 /"} colp={"22 000 /"} cold={"28 000"} />
          <TokensTabitem itemwidth={"60%"} tokenp={"Bereg_ (USD_5)"} tokens={"ЗАО «Чистый Берег»"} valyutp={"USD.sc"} valyuts={"6%"} price={"100 USD.sc"} dedline={"1837 дней"} colv={"50 000 /"} colp={"22 000 /"} cold={"28 000"} />
          <TokensTabitem itemwidth={"68%"} tokenp={"Bereg_ (USD_5)"} tokens={"ЗАО «Чистый Берег»"} valyutp={"USD.sc"} valyuts={"6%"} price={"100 USD.sc"} dedline={"1837 дней"} colv={"50 000 /"} colp={"22 000 /"} cold={"28 000"} />
          <TokensTabitem itemwidth={"55%"} tokenp={"Bereg_ (USD_5)"} tokens={"ЗАО «Чистый Берег»"} valyutp={"USD.sc"} valyuts={"6%"} price={"100 USD.sc"} dedline={"1837 дней"} colv={"50 000 /"} colp={"22 000 /"} cold={"28 000"} />
          <TokensTabitem itemwidth={"35%"} tokenp={"Bereg_ (USD_5)"} tokens={"ЗАО «Чистый Берег»"} valyutp={"USD.sc"} valyuts={"6%"} price={"100 USD.sc"} dedline={"1837 дней"} colv={"50 000 /"} colp={"22 000 /"} cold={"28 000"} />
          <TokensTabitem itemwidth={"80%"} tokenp={"Bereg_ (USD_5)"} tokens={"ЗАО «Чистый Берег»"} valyutp={"USD.sc"} valyuts={"6%"} price={"100 USD.sc"} dedline={"1837 дней"} colv={"50 000 /"} colp={"22 000 /"} cold={"28 000"} />
        </table>
      </div>
    )
}

export default TokensTabblock;
