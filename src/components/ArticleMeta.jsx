import React from "react";
import { MdiHeart } from "./MDIHeart";

const ArticleMeta = ({ article, interactive }) => {
  const { created_at, author, votes } = article;

  const transformedDate = new Date(created_at).toLocaleString("en-GB", {
    dateStyle: "long",
  });

  return (
    <summary className="article-meta">
      <div className="details">
        Published {transformedDate} by {author}
      </div>
      <button className="btn-like" disabled={!interactive}>
        <span>{votes}</span>
        <MdiHeart />
      </button>
    </summary>
  );
};

export default ArticleMeta;
