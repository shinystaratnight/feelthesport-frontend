import React from "react";
import classNames from "classnames";
import GetDirections from "../GetDirections";
import CartBoxItem from "../CartBoxItem";
import "./CartBox.css";

export default function CartBox({
  type,
  data,
  className,
  deleteItem,
  ...props
}) {
  const classes = classNames({
    "CartBox--container": true,
    [className]: className
  });

  if (type === "bookaslots") {
    const [bookaslotId, { arenaName, address, cost, dates }] = data;
    return (
      <div className={classes} {...props}>
        <h2 className="fnt-subtitle1 fgc-black fnt-bold">{arenaName}</h2>
        <p className="fnt-subtitle4 fgc-gray">{address}</p>
        <GetDirections />
        <div className="CartBox--items">
          {Object.entries(dates).map((date, index) => (
            <CartBoxItem
              type="bookaslots"
              key={index}
              data={date}
              deleteItem={deleteItem}
            />
          ))}
        </div>
        <p className="fnt-button2 fgc-black">
          Subtotal cost: <span className="fgc-darkOrange">{`₹${cost}`}</span>
        </p>
      </div>
    );
  }
  if (type === "events") {
    const [
      eventId,
      {
        eventName,
        address,
        sport: { name: sportName, icon: sportIcon },
        cost,
        participants
      }
    ] = data;

    return (
      <div className={classes} {...props}>
        <div className="CartBox--event--top">
          <div>
            <h2 className="fnt-subtitle1 fgc-black fnt-bold">{eventName}</h2>
            <p className="fnt-subtitle4 fgc-gray">{address}</p>
            <GetDirections />
          </div>
          <div>
            <div className="CartBoxItem--sport">
              <img src={sportIcon} alt="sport icon" />
              <p className="fnt-subtitle2 fgc-black fnt-bold">{sportName}</p>
            </div>
          </div>
        </div>
        <div className="CartBox--items">
          {Object.entries(participants).map((participant, index) => (
            <CartBoxItem
              type="events"
              key={index}
              data={participant}
              deleteItem={deleteItem}
            />
          ))}
        </div>
        <p className="fnt-button2 fgc-black">
          Subtotal cost: <span className="fgc-darkOrange">{`₹${cost}`}</span>
        </p>
      </div>
    );
  }
  if (type === "memberships") {
    const [membershipId, { arenaName, address, cost, participants }] = data;

    return (
      <div className={classes} {...props}>
        <h2 className="fnt-subtitle1 fgc-black fnt-bold">{arenaName}</h2>
        <p className="fnt-subtitle4 fgc-gray">{address}</p>
        <GetDirections />
        <div className="CartBox--items">
          {Object.entries(participants).map((participant, index) => (
            <CartBoxItem type="memberships" key={index} data={participant} />
          ))}
        </div>
        <p className="fnt-button2 fgc-black">
          Subtotal cost: <span className="fgc-darkOrange">{`₹${cost}`}</span>
        </p>
      </div>
    );
  }

  if (type === "coachings") {
    const [coachingId, { arenaName, address, cost, participants }] = data;

    return (
      <div className={classes} {...props}>
        <h2 className="fnt-subtitle1 fgc-black fnt-bold">{arenaName}</h2>
        <p className="fnt-subtitle4 fgc-gray">{address}</p>
        <GetDirections />
        <div className="CartBox--items">
          {Object.entries(participants).map((participant, index) => (
            <CartBoxItem type="coachings" key={index} data={participant} />
          ))}
        </div>
        <p className="fnt-button2 fgc-black">
          Subtotal cost: <span className="fgc-darkOrange">{`₹${cost}`}</span>
        </p>
      </div>
    );
  }
}
