import React from 'react';
import RinoktableTitle from '/components/wallettable/item/tabe-title/index';
import RinoktableTitletd  from '/components/wallettable/item/tabe-title/tabtitletd';
import Rinoktableitem from '/components/wallettable/item/tabe-item';
const Rinoktableblock = () => {
    return (
      <div className='tokens-tab-cont-table'>
        <table>
          <tbody>
            <RinokTabTitle>
              <RinokTabTitletd tdtext={"Цель заявки Статус"} />
              <RinokTabTitletd tdtext={"Токен Компания"} />
              <RinokTabTitletd tdtext={"Стоимость 1 токена"} />
              <RinokTabTitletd tdtext={"Номинальная стоимость"} />
              <RinokTabTitletd tdtext={"Количество токенов: выпущено / продано / доступно"} />
              <RinokTabTitletd tdtext={""} />
            </RinokTabTitle>
            <RinokTabitem itemwidth={"62%"} tokenp={"Купить"} tokens={"Активна"} valyutp={"Bereg_ (USD_5)"} valyuts={"ЗАО «Чистый Берег»"} price={"100 USD.sc"} dedline={"1837 дней"} colv={"50 000 /"} colp={"22 000 /"} cold={"28 000"} />
            <RinokTabitem itemwidth={"62%"} tokenp={"Купить"} tokens={"Активна"} valyutp={"Bereg_ (USD_5)"} valyuts={"ЗАО «Чистый Берег»"} price={"100 USD.sc"} dedline={"1837 дней"} colv={"50 000 /"} colp={"22 000 /"} cold={"28 000"} />
            <RinokTabitem itemwidth={"62%"} tokenp={"Купить"} tokens={"Активна"} valyutp={"Bereg_ (USD_5)"} valyuts={"ЗАО «Чистый Берег»"} price={"100 USD.sc"} dedline={"1837 дней"} colv={"50 000 /"} colp={"22 000 /"} cold={"28 000"} />
            <RinokTabitem itemwidth={"62%"} tokenp={"Купить"} tokens={"Активна"} valyutp={"Bereg_ (USD_5)"} valyuts={"ЗАО «Чистый Берег»"} price={"100 USD.sc"} dedline={"1837 дней"} colv={"50 000 /"} colp={"22 000 /"} cold={"28 000"} />
          </tbody>
        </table>
      </div>
    )
}

export default Rinoktableblock;
