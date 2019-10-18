import React from "react";
import "./NewsTab.css";
import NewsThread from "../NewsThread";
import PicSocial from "../../assets/images/icons/social-rec.png";

export default function NewsTab({ achievements, news }) {
  return (
    <div className="NewsTab--container">
      <h3 className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader">
        Our Achievements
      </h3>
      <NewsThread data={achievements} />
      <h3 className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader">
        Our News
      </h3>
      <NewsThread data={news} />
      {/* <h3 className="fnt-subtitle1 fgc-black NewsTab--header">
        We in Social Media
      </h3>
      <img src={data.socialMedia.image} alt="we in social media" />
      <div className="NewsTab--socialMedia">
        <div>
          <p className="fnt-title1 fgc-lightOrange">{`${
            data.socialMedia.shares
          }K`}</p>
          <p className="fnt-text1 fnt-bold fgc-lightOrange">shares</p>
        </div>
        <img src={PicSocial} alt="social media" />
      </div> */}
    </div>
  );
}
