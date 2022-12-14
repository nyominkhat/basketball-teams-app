import React from "react";
import { useParams } from "react-router-dom";
import useArticle from "../hooks/useArticle";
import Loading from "./Loading";

const Article = () => {
  const { teamId, articleId } = useParams();
  const { response: article, loading } = useArticle({ teamId, articleId });


  return (
    <div className="panal" style={{ width: "100%" }}>
      {loading ? (
        <Loading />
      ) : (
        <article className="article">
          <h1 className="article-title">{article.title}</h1>
          <p>{article.body}</p>
        </article>
      )}
    </div>
  );
};

export default Article;
