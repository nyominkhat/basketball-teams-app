import React from "react";
import { Link, useLocation, useMatch } from "react-router-dom";
import { slugify } from "../utils";

function SideBar({ title, list }) {
  return (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {list.map((item) => (
          <CustomLink key={item} to={slugify(item)}>
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
}

function CustomLink({ to, children }) {
  const location = useLocation();
  const isMatch = location.pathname.split("/")[2] === to;
  // const isMatch = location.pathname === to;
  // const isMatch = useMatch(to);

  return (
    <div>
      {isMatch ? "🌟" : ""}
      <Link
        className={isMatch ? "active" : ""}
        to={{
          pathname: to,
          search: location.search,
        }}
      >
        {children}
      </Link>
    </div>
  );
}

export default SideBar;
