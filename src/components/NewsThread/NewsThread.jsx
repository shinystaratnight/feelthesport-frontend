import React, { useState } from "react";
import PropTypes from "prop-types";
import NewsPost from "../NewsPost";
import "./NewsThread.css";

export default function NewsThread({ data }) {
  const [numOfItemsShown, setNumOfItemsShown] = useState(3);
  return (
    <div className="NewsThread--container">
      {data.slice(0, numOfItemsShown).map((item, index) => (
        <NewsPost
          title={item.title}
          date={item.date}
          image={item.image}
          key={index}
        >
          {item.body}
        </NewsPost>
      ))}
      {data.length > numOfItemsShown && (
        <button
          type="button"
          className="btn btn2 fnt-button2 bgc-white brdc-lightOrange fgc-lightOrange NewsThread--button"
          onClick={() => setNumOfItemsShown(numOfItemsShown + 3)}
        >
          SEE MORE
        </button>
      )}
    </div>
  );
}

NewsThread.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      image: PropTypes.string
    }).isRequired
  ).isRequired
};
