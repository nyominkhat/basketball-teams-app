import React from "react";
import { Outlet } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import Loading from "./Loading";
import SideBar from "./SideBar";

const Teams = () => {
  const { response: team, loading } = useTeamNames();

  if (loading === true) return <Loading />;

  return (
    <div className="container two-column">
      <SideBar title="players" list={team}></SideBar>

      <Outlet />
    </div>
  );
};

export default Teams;
