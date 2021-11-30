import PropTypes from 'prop-types';

import React from 'react';

const CooperationSliderItem = ({ img, name }) => {
    return (
        <div className="cooperation-slider-item">
            <div>
                <img src={img} alt="" draggable="false" />
            </div>

            <p>{name}</p>
        </div>
    );
};

CooperationSliderItem.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
};

CooperationSliderItem.defaultProps = {
    img: 'img/sliderItem1.png',
    name: '',
};

export default CooperationSliderItem;
