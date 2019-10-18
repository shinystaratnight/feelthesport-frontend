import React from "react";
import Player from "../Player";
import "./PlayersTab.css";

export default function PlayersTab({ players }) {
  console.log("PPPP", players);
  return (
    <div className="PlayersTab--container">
      <h3 className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader">
        Players
      </h3>
      <div className="PlayersTab--players">
        {players.map((player, index) => (
          <Player
            name={player.name}
            position={player.position}
            avatar={player.avatar}
            socialMedia={player.socialMedia}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
