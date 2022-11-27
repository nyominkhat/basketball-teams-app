import React from "react";
import { useLocation, useSearchParams, Outlet } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import Loading from "./Loading";
import SideBar from "./SideBar";

const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);
  const team = searchParams.get("teamId");
  const { response: name, loading } = usePlayerNames(team);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div className="container two-column">
      <SideBar title="players" list={name}></SideBar>

      <Outlet />
    </div>
  );
};

export default Players;
