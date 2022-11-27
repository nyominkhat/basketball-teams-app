import React from "react";
import { Link, useParams } from "react-router-dom";
import usePlayer from "../hooks/usePlayer";

const Player = () => {
  const { name } = useParams();
  const { response: player, loading } = usePlayer(name);
  // console.log(player);
  if (loading === true) {
    return null;
  }

  if (!player) {
    return null;
  }

  return (
    <div className="panel">
      <img
        src={`${player.avatar}`}
        alt={`${player.avatar}`}
        className="avatar"
      />
      <h1 className="medium-header"> {player.name}</h1>
      <h3 className="header">#{player.number}</h3>
      <div className="row" style={{ width: "100%" }}>
        <ul className="info-list">
          <li>
            Team
            <div>
              <Link to={`${player.teamId}`}>
                {player.teamId[0].toUpperCase() + player.teamId.slice(1)}
              </Link>
            </div>
          </li>
          <li>
            Position
            <div>{player.position}</div>
          </li>
          <li>
            PPG
            <div>{player.ppg}</div>
          </li>
        </ul>
        <ul className="info-list">
          <li>
            APG
            <div>{player.apg}</div>
          </li>
          <li>
            SPG
            <div>{player.spg}</div>
          </li>
          <li>
            RPG
            <div>{player.rpg}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Player;
