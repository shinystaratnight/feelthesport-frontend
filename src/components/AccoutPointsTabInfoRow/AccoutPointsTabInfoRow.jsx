import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Typography from "../Typography";
import "./AccoutPointsTabInfoRow.css";

export default function AccoutPointsTabInfoRow({
  index,
  details,
  description,
  date,
  time,
  credit,
  debit,
  balance,
  className,
  ...props
}) {
  const [showDescription, setShowDescription] = useState(false);

  const classes = classNames({
    "AccoutPointsTabInfoRow--container": true,
    [className]: className
  });

  const showHandler = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={classes} {...props}>
      <p className="fnt-text1 fgc-gray">{index}</p>
      <div>
        <p className="fnt-text1 fgc-gray fnt-bold">{details}</p>
        <p className="fnt-text1 fgc-gray">
          {showDescription ? description : "Description"}
          <span
            className="fgc-lightOrange AccoutPointsTabInfoRow--show"
            onClick={showHandler}
          >
            {showDescription ? " Hide" : " Show"}
          </span>
        </p>
      </div>
      <div>
        <p className="fnt-text1 fgc-gray">{date}</p>
        <p className="fnt-text1 fgc-gray">{time}</p>
      </div>
      <p className="fnt-text1 fgc-gray">{credit}</p>
      <p className="fnt-text1 fgc-gray">{debit}</p>
      <div>
        <p className="fnt-text1 fgc-gray">{balance}</p>
        <p className="fnt-text1 fgc-lightOrange fnt-bold">Support</p>
      </div>
    </div>
  );
}

AccoutPointsTabInfoRow.defaultProps = {
  className: undefined
};

AccoutPointsTabInfoRow.propTypes = {
  className: PropTypes.string
};
