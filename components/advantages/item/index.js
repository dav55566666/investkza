import React from 'react';

const AdvantagesItem = ({ imgPath, title, desc, number }) => (
    <div className="advantages-item">
        <div className="item-green">
            <img src="/img/advantages/number-green.png" alt="" draggable="false" />
            <p>{number}</p>
        </div>
        <img src={imgPath} alt="" draggable="false" />
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
);

export default AdvantagesItem;
