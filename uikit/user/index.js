import React from 'react';

const User = ({ img, name, profession }) => (
    <div className="user">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>{profession}</p>
    </div>
);

export default User;
