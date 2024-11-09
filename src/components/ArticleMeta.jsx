import React from "react";
import { normalizeDate } from "../utils/normalizeDate";
import Votes from "./Votes";
import VoteStat from "./VoteStat";
import "./ArticleMeta.style.css";

const ArticleMeta = ({ article, interactive }) => {
  const { article_id, created_at, author, votes } = article;

  return (
    <summary className="article-meta">
      <div className="details">
        Published on <strong>{normalizeDate(created_at)}</strong> by{" "}
        <strong>{author}</strong>
      </div>
      {interactive ? (
        <Votes defaultValue={votes} type="article" typeId={article_id} />
      ) : (
        <VoteStat value={votes} />
      )}
    </summary>
  );
};

export default ArticleMeta;
