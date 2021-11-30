import React from 'react';

const ReviewCard = ({ name, review, date }) => (
    <div className="reviewCard">
        <h4 className="reviewCard-title">{name}</h4>
        <p className="reviewCard-text">{review}</p>
        <div className="reviewCard-date">
            <p>{date}</p>
            <img src="/img/review-icon.png" alt="" />
        </div>
    </div>
);

export default ReviewCard;
