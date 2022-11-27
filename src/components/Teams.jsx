import React from "react";
import { Outlet } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import SideBar from "./SideBar";

const Teams = () => {
  const { response: team, loading } = useTeamNames();

  if (loading === true) return null;

  return (
    <div className="container two-column">
      <SideBar title="players" list={team}></SideBar>

      <Outlet />
    </div>
  );
};

export default Teams;
