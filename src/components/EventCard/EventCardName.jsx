import React from "react";
import Typography from "../Typography";

export default function EventCardName({ type }) {
  const eVariant = type === 1 ? "EventCard" : "EventCard2";
  return (
    <div className={`${eVariant}--name`}>
      <Typography
        type="text1"
        color="white"
        className={`${eVariant}--name--title`}
      >
        Name of the Event
      </Typography>
      <Typography
        type="text3"
        color="white"
        className={`${eVariant}--name--subtitle`}
      >
        Organized by Sport Club
      </Typography>
    </div>
  );
}
