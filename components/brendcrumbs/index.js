import { Breadcrumb } from 'antd';

import React from 'react';

const Brendctumbs = ({ children }) => (
    <div className="brendcrumbs">
        <div className="brendcrumbs-cont">
            <Breadcrumb>{children}</Breadcrumb>
        </div>
    </div>
);

export default Brendctumbs;
