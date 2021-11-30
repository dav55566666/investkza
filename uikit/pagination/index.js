import { Pagination } from 'antd';

import React from 'react';

const PaginationItem = () => (
    <div className="pagination">
        <Pagination defaultCurrent={1} defaultPageSize={1} showSizeChanger={false} total={60} />
    </div>
);

export default PaginationItem;
