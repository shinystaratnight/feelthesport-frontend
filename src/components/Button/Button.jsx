/* eslint-disable jsx-a11y/mouse-events-have-key-events */
// import React from "react";
import React, { Component } from "react";
import Typography from "../Typography";
import "./Button.css";

export default class Button extends Component {
  _mounted = false;

  constructor() {
    super();
    this.mql = window.matchMedia("(min-width: 768px)");
    this.state = {
      hovering: false,
      onDesktop: true
    };
  }

  componentDidMount = () => {
    this._mounted = true;
    this.mql.addListener(this.checkWidth);
  };

  componentWillUnmount = () => {
    this._mounted = false;
    this.mql.removeListener(this.checkWidth);
  };

  checkWidth = e => {
    if (!this._mounted) return;
    if (e.matches) this.setState({ onDesktop: true });
    else this.setState({ onDesktop: false });
  };

  buttonType = t => {
    const { onDesktop } = this.state;

    if (t === "button1")
      return onDesktop
        ? [" Button--type--button1", "button1"]
        : [" Button--type--button1", "button4"];
    if (t === "button2")
      return onDesktop
        ? [" Button--type--button2", "button2"]
        : [" Button--type--button2", "button4"];
    if (t === "button3")
      return onDesktop
        ? [" Button--type--button3", "button2"]
        : [" Button--type--button3", "button4"];
    if (t === "button4" || t === undefined)
      return [" Button--type--button4", "text1"];
    if (t === "button5") return [" Button--type--button5", "button3"];
    if (t === "button6") return [" Button--type--button6", "button4"];
    if (t === "button7") return [" Button--type--button7", "text1"];
    return [" Button--type--button4", "text1"];
  };

  buttonColor = c => {
    if (c === "white" || c === undefined) return "white";
    if (c === "black") return "black";
    if (c === "gray") return "gray";
    if (c === "lightOrange") return "lightOrange";
    if (c === "darkOrange") return "darkOrange";
    if (c === "blue") return "blue";
    if (c === "green") return "green";
    return "white";
  };

  buttonBackgroundColor = c => {
    if (c === "white") return " Button--backgroundColor--white";
    if (c === "black") return " Button--backgroundColor--black";
    if (c === "gray") return " Button--backgroundColor--gray";
    if (c === "lightOrange" || c === undefined)
      return " Button--backgroundColor--lightOrange";
    if (c === "darkOrange") return " Button--backgroundColor--darkOrange";
    if (c === "blue") return " Button--backgroundColor--blue";
    if (c === "green") return " Button--backgroundColor--green";
    if (c === "facebook") return " Button--backgroundColor--facebook";
    if (c === "gmail") return " Button--backgroundColor--gmail";
    if (c === "transparent") return " Button--backgroundColor--transparent";
    return " Button--backgroundColor--lightOrange";
  };

  buttonBorderColor = c => {
    if (c === "white") return " Button--borderColor--white";
    if (c === "black") return " Button--borderColor--black";
    if (c === "gray") return " Button--borderColor--gray";
    if (c === "lightOrange" || c === undefined)
      return " Button--borderColor--lightOrange";
    if (c === "darkOrange") return " Button--borderColor--darkOrange";
    if (c === "blue") return " Button--borderColor--blue";
    if (c === "green") return " Button--borderColor--green";
    return " Button--borderColor--lightOrange";
  };

  buttonText = t => {
    if (typeof t === "string") return t;
    return "Button";
  };

  handleEnter = () => {
    if (!this._mounted) return;
    this.setState({ hovering: true });
  };

  handleLeave = () => {
    if (!this._mounted) return;
    this.setState({ hovering: false });
  };

  render() {
    const {
      type,
      color,
      colorHover,
      backgroundColor,
      backgroundColorHover,
      borderColor,
      skewed,
      rounded,
      clickHandler,
      link,
      icon,
      submit,
      children,
      className,
      ...props
    } = this.props;

    const { onDesktop, hovering } = this.state;

    const [bType, tType] = this.buttonType(type);
    const bText = this.buttonText(children);
    const bColor =
      hovering && colorHover !== undefined
        ? this.buttonColor(colorHover)
        : this.buttonColor(color);
    const bBackgroundColor =
      hovering && backgroundColorHover !== undefined
        ? this.buttonBackgroundColor(backgroundColorHover)
        : this.buttonBackgroundColor(backgroundColor);
    const [bBorder, bBorderColor] =
      borderColor === undefined
        ? ["", ""]
        : [" Button--border", this.buttonBorderColor(borderColor)];
    const [bSkewed, tSkewed] = skewed
      ? [" Button--skewButton", " Button--unskewText"]
      : ["", ""];
    const bRounded = rounded ? " Button--roundButton" : "";
    const [BElement, bLink] = link ? ["a", link] : ["button", undefined];
    const bClassName = className || "";
    const hasIcon = icon !== undefined && !onDesktop ? " Button--hasIcon" : "";
    const bSubmit = submit !== undefined ? { type: "submit" } : {};

    return (
      <BElement
        href={bLink}
        className={`Button--container${bType}${bBackgroundColor}${bBorder}${bBorderColor}${bSkewed}${bRounded}${hasIcon} ${bClassName}`}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
        {...bSubmit}
        {...props}
      >
        {icon !== undefined && <img src={icon} alt={bText} />}
        <Typography
          type={tType}
          color={bColor}
          className={`${tSkewed} ${
            icon !== undefined && !onDesktop ? " Button--hideButtonText" : ""
          }`}
        >
          {bText}
        </Typography>
      </BElement>
    );
  }
}
