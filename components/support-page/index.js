import React from 'react';

const SupportPage = () => {
  return (
    <div className="support-page" >
      <div className="support-page-cont">
        <h1>Служба поддержки клиентов</h1>
        <div className="support-page-cont_box" id="support-page">
          <h4>Мы здесь, чтобы помочь!</h4>
          <p>Вы всегда можете отправить нам электронное письмо, написать в чате или позвонить в службу поддержки. Служба поддержки работает в рабочие дни, с 9:00 до 18:00 (GMT+3).</p>
          <div className="support-page-cont_box_flex">
            <div className="support-page-cont_box_flex_item">
              <div className="support-page-cont_box_flex_item_img">
                <img src="/img/phone_icon.svg" />
              </div>
              <div className="support-page-cont_box_flex_item_text">
                <span>+7 777 022 66 74<br />+7 705 148 29 15</span>
                <a href="tel: +7 (999) 525-25-57">Позвонить</a>
              </div>
            </div>
            <div className="support-page-cont_box_flex_item">
              <div className="support-page-cont_box_flex_item_img">
                <img src="/img/mail_icon.svg" />
              </div>
              <div className="support-page-cont_box_flex_item_text">
                <span>info@digital-investor.kz</span>
                <a href="mailito: mail@kzinvestmarket.com">Написать</a>
              </div>
            </div>
            <div className="support-page-cont_box_flex_item">
              <div className="support-page-cont_box_flex_item_img">
                <img src="/img/telegram_icon.svg" />
              </div>
              <div className="support-page-cont_box_flex_item_text">
                <span>@digitalinvest</span>
                <a>Задать вопрос</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SupportPage;
