import React from 'react';

const OtzivItem = ({
  otzivdata, username, otzivtext,
}) => (
  <div className="otziv-page-cont-flex-item">
    <h4>{username}</h4>
    <p>{otzivtext}</p>
    <div className="otziv-page-cont-flex-item-text">
      <p>{otzivdata}</p>
      <img src="/img/review-icon.png" alt="" />
    </div>
  </div>
);
export default OtzivItem;
