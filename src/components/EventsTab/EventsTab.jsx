import React from "react";
import EventsCarousel from "../EventsCarousel";
import "./EventsTab.css";

export default function EventsTab({ pastEvents, presentEvents, futureEvents }) {
  return (
    <div className="EventsTab--container">
      {/* <h3 className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader">All events</h3> */}
      {pastEvents && (
        <>
          <h3 className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader">
            Past events
          </h3>
          <EventsCarousel events={pastEvents} />
        </>
      )}
      {presentEvents && (
        <>
          <h3 className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader">
            Present events
          </h3>
          <EventsCarousel events={presentEvents} />
        </>
      )}
      {futureEvents && (
        <>
          <h3 className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader">
            Future events
          </h3>
          <EventsCarousel events={futureEvents} />
        </>
      )}
    </div>
  );
}
