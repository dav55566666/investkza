import { Collapse } from 'antd';
import PropTypes from 'prop-types';

import React from 'react';

const { Panel } = Collapse;

const CollapseItem = ({ question, answer }) => {
    return (
        <div className="collapse">
            <Collapse expandIcon={() => <img src="icon/collapseIcon.svg" alt="" draggable="false" />} ghost>
                <Panel header={question} key="1">
                    <div className="text">{answer}</div>
                </Panel>
            </Collapse>
        </div>
    );
};

CollapseItem.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,
};

CollapseItem.defaultProps = {
    question: 'Collapse question',
    answer: 'Collapse Answer',
};
export default CollapseItem;
