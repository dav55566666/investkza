import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function Main({ data }) {
  return (
    <div className="news">
      <div className="news-cont">
        <div className="news-cont-flex">
          {!!data.length ? (
            data.map((item, index) => (
              <Item key={index} data={item} />
            ))
          ) : (
            <h1 style={{ margin: "25px auto" }}>No result</h1>
          )}
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Main;
