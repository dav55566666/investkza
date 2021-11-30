import React from 'react';

const AdvantagesHome = ({ title, children, isOnBorder }) => (
    <div className="advantages-home" style={{ borderBottom: isOnBorder ? '1px solid #DFDFDF' : '' }}>
        <div className="container">
            <div className="advantages-home_content">
                <h2>{title}</h2>
                <div className="advantages-home_content-items">{children}</div>
            </div>
        </div>
    </div>
);

export default AdvantagesHome;
