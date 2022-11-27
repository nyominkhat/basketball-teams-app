import React from "react";
import {
  Link,
  useLocation,
  useSearchParams,
  Outlet,
  useMatch,
} from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import { slugify } from "../utils";

const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);
  const team = searchParams.get("teamId");
  const { response: name, loading } = usePlayerNames();

  if (loading === true) {
    return null;
  }

  return (
    <div className="container two-column">
      <SideBar title="players" playersList={name}></SideBar>

      <Outlet />
    </div>
  );
};

export default Players;

function SideBar({ title, playersList }) {
  return (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {playersList.map((player) => (
          <CustomLink key={player} to={slugify(player)}>
            {player.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
}

function CustomLink({ to, children }) {
  // const location = useLocation();
  // const isMatch = location.pathname === to;
  const isMatch = useMatch(to);

  return (
    <div className={isMatch ? "active" : ""}>
      {isMatch ? "🎇" : ""}
      <Link to={to}>{children}</Link>
    </div>
  );
}
