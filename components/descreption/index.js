import React from 'react';

const DescriptionHome = () => {
    return (
        <div className="description-home">
            <div className="container">
                <div className="description-home_contentn">
                    <div className="description-home_contentn-item">
                        <img src="/img/shield.png" alt=""/>
                        <p>Вы можете начать
                            инвестировать
                            от суммы всего в $20</p>
                    </div>

                    <div className="description-home_contentn-item">
                        <img src="/img/shield.png" alt=""/>
                        <p>Токен регулируется
                            и защищён законодатель-
                            ством Казахстана</p>
                    </div>

                    <div className="description-home_contentn-item">
                        <img src="/img/shield.png" alt=""/>
                        <p>Доход по токенам выше,
                            чем по традиционным
                            финансовым инструментам</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescriptionHome;