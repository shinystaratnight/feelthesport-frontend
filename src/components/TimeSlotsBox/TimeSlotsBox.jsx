import React from "react";
import Select from "react-select";
import classNames from "classnames";
import TimeMap from "../TimeMap";
import TimeGrid from "../TimeGrid";
import "./TimeSlotsBox.css";

export default function TimeSlotsBox({
  courtIndex,
  courtId,
  courtType,
  minPlayers,
  maxPlayers,
  slotTimes,
  price,
  chargePerPlayer,
  currentCourt,
  activeDate,
  slotHandler,
  playerHandler,
  className
}) {
  const classes = classNames({
    "TimeSlotsBox--container": true,
    [className]: className
  });

  return (
    <div className={classes}>
      <div className="TimeSlotsBox--name">
        <h3 className="fnt-subtitle1 fgc-black">{`Court ${courtIndex +
          1} (${courtType})`}</h3>
        <TimeMap />
      </div>
      <TimeGrid
        slotTimes={slotTimes}
        activeDate={activeDate}
        courtId={courtId}
        currentCourt={currentCourt}
        slotHandler={slotHandler}
      />
      <div className="TimeSlotsBox--price">
        <div>
          <p className="fnt-subtitle4 fgc-black">Number of players:</p>
          <Select
            value={{
              value: currentCourt.players,
              label: currentCourt.players
            }}
            onChange={p => playerHandler(activeDate, courtId, Number(p.value))}
            options={new Array(maxPlayers - minPlayers + 1)
              .fill(0)
              .map((opt, index) => ({
                value: minPlayers + index,
                label: minPlayers + index
              }))}
            name="participants"
            className="RegistrationForm--select fnt-text1"
            theme={theme => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: "#ffbf1a",
                primary50: "#ffaf18",
                primary75: "#fe9d06",
                primary: "#fc9b04"
              }
            })}
          />
        </div>
        <p className="fnt-subtitle2 fgc-black">
          Cost:{" "}
          <span className="fgc-darkOrange fnt-bold">{`Rs ${Object.values(
            currentCourt.slots
          ).reduce((t, v) => t + (v === "selected" ? 1 : 0), 0) *
            price *
            (chargePerPlayer ? currentCourt.players : 1)}`}</span>
        </p>
      </div>
    </div>
  );
}
