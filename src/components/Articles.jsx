import React from "react";
import { Outlet, useParams } from "react-router-dom";
import useTeamsArticles from "../hooks/useTeamsArticles";
import Loading from "./Loading";
import SideBar from "./SideBar";

const Articles = () => {
  const { teamId } = useParams();
  const { response: articles, loading } = useTeamsArticles(teamId);

  if (loading === true) return <Loading />;

  return (
    <div className="container two-column">
      <SideBar
        title="articles"
        list={articles.map((article) => article.title)}
      />

      <Outlet />
    </div>
  );
};

export default Articles;
