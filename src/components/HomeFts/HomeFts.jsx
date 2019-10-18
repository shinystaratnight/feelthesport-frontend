import React from "react";
import CoinImg from "../../assets/images/coin.svg";
import OneImg from "../../assets/images/one.svg";
import "./HomeFts.css";

export default function HomeFts() {
  return (
    <div className="HomePage--fts">
      <h3 className="fnt-title1 fgc-white">
        <span className="fgc-lightOrange">FTS</span> PLAY POINTS
      </h3>
      <div>
        <div>
          <img src={OneImg} alt="one play point" />
          <p>FTS</p>
          <p className="fnt-title2 fgc-white nowrap">Play Point</p>
        </div>
        <p className="fnt-title1 fgc-lightOrange">=</p>
        <div>
          <img src={CoinImg} alt="coin" />
          <div className="text-center fgc-white">One Rupee</div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn3 fnt-button3 bgc-black brdc-lightOrange fgc-lightOrange btn-skewed"
      >
        <span>Know more</span>
      </button>
    </div>
  );
}
