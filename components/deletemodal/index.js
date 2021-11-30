import React from 'react';

const Delmodal = () => {
  function deletemodalnone() {
    document.getElementById('deletemodal').style.display = 'none';
  }
  return (
    <div className="deletemodal" id="deletemodal">
      <div className="deletemodal-cont">
        <button onClick={deletemodalnone} className="clousmodal" />
        <div className="deletemodal-cont-top">
          <h3>Удаление активной заявки</h3>
          <p>При удалении заявка будет снята со вторичного рынка. Все сделки по ней будут остановлены. Зарезервированные средства для покупки будут освобождены.</p>
        </div>
        <div className="deletemodal-cont-bottom">
          <div className="deletemodal-cont-bottom-box">
            <button>Подтвердить</button>
            <button>Отменить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delmodal;
