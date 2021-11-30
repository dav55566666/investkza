import React from 'react';
import Button from "../../uikit/button";

const ReferralProgram = () => {
  return (
    <div className="referral-program" >
      <div className="container">
        <h2 className="title">Реферальная программа</h2>
        <p>Реферальная программа – это такой вид сотрудничества, при котором компания платит клиенту за привлечение новых клиентов. Второе название – партнерская программа. Вид и размер вознаграждения, как и условия получения этого вознаграждения, определяются каждой организацией индивидуально. Важно создать такие условия, при которых в участии будут заинтересованы все стороны: и те, кто приглашает, и те, кто принимает приглашения. Наиболее распространенной практикой является денежное вознаграждение – часть от суммы совершенных сделок привлеченными участниками.</p>
        <div className="img"><img src="/img/ReferralProgram.png" /></div>
        <div className="baner">
          <img src="/img/baner.png" />
          <div className="banner-divs">
            <div>
              <h2>Чем больше рефералов,</h2>
              <p>тем больше прирост к прибыли</p>
            </div>
            <Button children="Получить реферальную ссылку" color="submit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferralProgram;
