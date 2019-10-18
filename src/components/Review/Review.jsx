import React from "react";
import Stars from "../Stars";
import Stars2 from "../Stars2";
import "./Review.css";

export default function Review({ reviewer, rating, body, reply }) {
  return (
    <div className="Review--container">
      <div className="Review--top">
        <div>
          <p className="fnt-subtitle4 fgc-black">{reviewer}</p>
          <Stars stars={rating} color="lightOrange" />
        </div>
        <Stars2 rating={rating} className="bgc-lightOrange" />
      </div>
      <p className="fnt-text1 fgc-gray Review--review">{body}</p>
      {reply && (
        <div className="Review--reply">
          <p className="fnt-subtitle4 fgc-gray">{`Reply from ${
            reply.replier
          }`}</p>
          <p className="fnt-text1 fgc-gray">{reply.body}</p>
        </div>
      )}
    </div>
  );
}
