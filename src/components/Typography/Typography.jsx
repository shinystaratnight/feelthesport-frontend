import React from "react";
import { Link } from "react-router-dom";
import "./Typography.css";

export default function Typography({
  type,
  color,
  span,
  link,
  className,
  children,
  ...props
}) {
  const typographyElementAndType = et => {
    if (et === "title1") return ["h1", " Typography--type--title1"];
    if (et === "title2") return ["h2", " Typography--type--title2"];
    if (et === "subtitle1") return ["h3", " Typography--type--subtitle1"];
    if (et === "subtitle2") return ["h4", " Typography--type--subtitle2"];
    if (et === "subtitle3") return ["h5", " Typography--type--subtitle3"];
    if (et === "subtitle4") return ["h6", " Typography--type--subtitle4"];
    if (et === "button1") return ["h4", " Typography--type--button1"];
    if (et === "button2") return ["h4", " Typography--type--button2"];
    if (et === "button3") return ["h5", " Typography--type--button3"];
    if (et === "button4") return ["h6", " Typography--type--button4"];
    if (et === "text1") return ["p", " Typography--type--text1"];
    if (et === "text2" || et === undefined)
      return ["p", " Typography--type--text2"];
    if (et === "text3") return ["p", " Typography--type--text3"];
    return ["p", " Typography--type--text2"];
  };

  const typographyColor = c => {
    if (c === "white" || c === undefined) return " Typography--color-white";
    if (c === "black") return " Typography--color-black";
    if (c === "gray") return " Typography--color-gray";
    if (c === "lightOrange") return " Typography--color-lightOrange";
    if (c === "darkOrange") return " Typography--color-darkOrange";
    if (c === "blue") return " Typography--color-blue";
    if (c === "green") return " Typography--color-green";
    return " Typography--color-white";
  };

  const typographyText = t => {
    if (typeof t === "string") return t;
    return "";
  };

  let [TElement, tType] = typographyElementAndType(type);
  TElement = span ? "span" : TElement;
  const tColor = typographyColor(color);
  // const tText = typographyText(children);
  const tClassName = className || "";

  if (link !== undefined)
    return (
      <Link to={link}>
        <TElement
          className={`Typography--container${tType} ${tClassName}`}
          {...props}
        >
          {children}
        </TElement>
      </Link>
    );

  return (
    <TElement
      className={`Typography--container${tType}${tColor} ${tClassName}`}
      {...props}
    >
      {children}
      {/* {tText} */}
    </TElement>
  );
}
