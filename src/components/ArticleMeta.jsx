import React from "react";
import { normalizeDate } from "../utils/normalizeDate";
import LikeButton from "./LikeButton";

const ArticleMeta = ({ article, interactive }) => {
  const { created_at, author, votes } = article;

  return (
    <summary className="article-meta">
      <div className="details">
        Published {normalizeDate(created_at)} by {author}
      </div>
      <LikeButton value={votes} interactive={interactive} />
    </summary>
  );
};

export default ArticleMeta;
