import React from "react";
import classNames from "classnames";
import "./SocialMedia.css";

export default function SocialMedia({ socialMedia, color, className }) {
  const classes = classNames({
    "SocialMedia--container": true,
    [className]: className
  });

  let bgc;
  let fgc;

  if (color === "black") {
    bgc = "#19191b";
    fgc = "#fff";
  } else {
    bgc = "#fff";
    fgc = "#19191b";
  }

  return (
    <div className={classes}>
      {socialMedia.map((social, index) => {
        let icon;
        if (social.includes("facebook.com")) {
          icon = "fa fa-facebook";
        } else if (social.includes("twitter.com")) {
          icon = "fa fa-twitter";
        } else if (social.includes("instagram.com")) {
          icon = "fa fa-instagram";
        } else if (social.includes("linkedin.com")) {
          icon = "fa fa-linkedin";
        } else {
          icon = "fa fa-facebook";
        }

        return (
          <a
            key={index}
            href={social}
            style={{ backgroundColor: bgc, color: fgc }}
            className="SocialMedia--icon"
          >
            <i className={icon} />
          </a>
        );
      })}
    </div>
  );
}
