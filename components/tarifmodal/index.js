import React from 'react';
import Tarif from "/components/tarif"
import Tarifitem from "/components/tarif/item"
import Tarifitemright from "/components/tarif/item/item"

const Tarifmodal = () => {
  function cloustarivmodal() {
     document.getElementById('tariv').style.display = "none";
   }
    return (
        <div className="tariv" id="tariv">

          <Tarif>
          <button onClick={cloustarivmodal} className="clousmodal"></button>
            <Tarifitem imglink={"/img/asdasc.png"} imgtext={"Ввод средств в кошелек"}>
              <Tarifitemright firsttext={"Банковские платежные карточки ОАО «Банка БелВЭБ» (MasterCard, VISA, БЕЛКАРТ)"} firstlink={"Комиссия 0,00 %"} lastspan={"10000 USD/day, 25000 USD/week, 50000 USD/month (по одной карте)"} />
              <Tarifitemright firsttext={"Банковские платежные карточки другихбанков РБ (VISA)"} firstlink={"Комиссия 0,00 %"} firstspan={"Ваш банк-эмитент может списать комиссионный сбор"} lastspan={"10000 USD/day, 25000 USD/week, 50000 USD/month (по одной карте) "} />
              <Tarifitemright firsttext={"В отделении ОАО «Банк БелВЭБ»"} firstlink={"1 коп. (белорусские рубли)10 коп. (иностранная валюта)"} lastspan={"Без ограничения суммы операции"} />
            </Tarifitem>
            <Tarifitem imglink={"/img/ascasc.png"} imgtext={"Вывод средств из кошелька"}>
              <Tarifitemright firsttext={"На счета клиента в банке ОАО «Банк БелВЭБ»"} firstlink={"1 коп. (белорусские рубли)10 коп. (иностранная валюта)"} lastspan={"Без ограничения суммы операции"} />
              <Tarifitemright firsttext={"На счета клиента в другом банке"} firstlink={"В соответствии с тарифами других банков"} lastspan={"10000 USD/day, 25000 USD/week, 50000 USD/month (по одной карте) "} />
            </Tarifitem>
          </Tarif>
        </div>
    );
}

export default Tarifmodal;
