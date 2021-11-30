import React from "react";
import Slider from "react-slick";
import CooperationSliderItem from "../../uikit/cooperation-slider-item";

const CooperationCarousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="cooperationCarousel">
      <div className="app">
        <Slider {...settings}>
          {data.length > 0 ? (
            data.map((item, index) => (
              <div key={index}>
                <CooperationSliderItem img={item.image} name={item.name} />
              </div>
            ))
          ) : (
            <p>Please add some cards</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default CooperationCarousel;
