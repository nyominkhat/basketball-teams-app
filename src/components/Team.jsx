import React from "react";
import { Link, useParams } from "react-router-dom";
import useTeam from "../hooks/useTeam";
import Loading from "./Loading";
import TeamLogo from "./TeamLogo";

const Team = () => {
  const { teamId } = useParams();
  const { response: team, loading } = useTeam(teamId);
  if (loading === true) return <Loading />;
  // if (!team) return null;
  return (
    <div className="panel">
      <div style={{ width: "100%" }}>
        <TeamLogo id={team.id} className="center" />

        <h1 className="medium-header">{team.name}</h1>
        <ul className="info-list row">
          <li>
            Est. <div>{team.established}</div>
          </li>
          <li>
            Manager <div>{team.manager}</div>
          </li>
          <li>
            Coach <div>{team.coach}</div>
          </li>
        </ul>

        <Link className="btn-main center" to={`/${teamId}`}>
          {team.name} Team page
        </Link>
      </div>
    </div>
  );
};

export default Team;
