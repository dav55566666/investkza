import React from 'react';

const NailsCard = () => {
    let nailsCard = [
        {
            Img: '/img/nailsimg.png',
            bereg: 'Bereg_ (USD_5)',
            CleanBeach: 'ЗАО «Чистый Берег»',
            rail: 'Заявка к досрочному погашению',
            railFlex: '750',
            edit: 'Обрабатывается',
            editFlex: '90%',
        },
        {
            Img: '/img/nailsimg.png',
            bereg: 'Bereg_ (USD_5)',
            CleanBeach: 'ЗАО «Чистый Берег»',
            rail: 'Заявка к досрочному погашению',
            railFlex: '750',
            edit: 'Обрабатывается',
            editFlex: '90%',
        },
    ];
    return (
        <div className="nailsBody">
            <div className="container">
                {nailsCard.map((nails, index) => {
                    return (
                        <div key={index} className="nails">
                            <img src={nails.Img} alt="" draggable="false" className="nailsImg" />
                            <div className="nailsText">
                                <div className="nailTextTitle">
                                    <p className="nailsTextBereg naiilp">{nails.bereg}</p>
                                    <p className="nailsTextCleanBeach naiilp">{nails.CleanBeach}</p>
                                </div>
                                <p className="nailsTextRail naiilp">
                                    {nails.rail}
                                    <span>{nails.railFlex}</span>
                                </p>
                                <p className="nailsTextEdit naiilp">
                                    {nails.edit}
                                    <span className="nailpercent">{nails.editFlex}</span>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NailsCard;
