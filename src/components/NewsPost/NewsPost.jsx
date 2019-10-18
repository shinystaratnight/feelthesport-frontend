import React, { useState } from "react";
import "./NewsPost.css";

export default function NewsPost({ title, date, children, image }) {
  const [showing, setShowing] = useState(true);

  const handleClick = () => {
    setShowing(!showing);
  };

  return (
    <div className="NewsPost--container">
      {image && <img src={image} alt="post pic" className="NewsPost--pic1" />}

      <div className="NewsPost--body">
        <div className="NewsPost--header">
          <h4 className="fnt-subtitle2 fgc-black">{title}</h4>
          <p className="fnt-text1 fgc-black">{new Date(date).toDateString()}</p>
        </div>
        <img src={image} alt="post pic" className="NewsPost--pic2" />
        <div className="NewsPost--post">
          <p className="fnt-text1 fgc-black">
            {showing ? children : `${children.slice(0, 144)}...`}
          </p>
          <p className="fnt-text2 fgc-lightOrange" onClick={handleClick}>
            {showing ? "Hide" : "Show more"}
          </p>
        </div>
      </div>
    </div>
  );
}
