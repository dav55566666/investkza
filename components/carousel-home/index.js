import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselHome = () => {
  const [tokenData, setTokenData] = useState([]);
  useEffect(() => {
    fetch("https://api.digital-investor.kz/api/get-tokens-main-info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(({ data }) => setTokenData(data));
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      keyBoardControl={true}
      containerClass="carousel-home"
      arrows={false}
      infinite={true}
      keyBoardControl={true}
      autoPlay={true}
      autoPlaySpeed={4000}
    >
      {tokenData.map((data) => {
        return (
          <div style={{ height: "100%" }} key={uuidv4()}>
            <div className="carousel-home_item">
              {!!data.company_logo.length && (
                <img src={data.company_logo} alt="" draggable="false" />
              )}
              <div className="home_item-desc">
                <p>{data.company_full_name}</p>
                <span>{data.percent}%</span>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselHome;
