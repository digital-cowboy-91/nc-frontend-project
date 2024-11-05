import React from "react";
import { normalizeDate } from "../utils/normalizeDate";
import Votes from "./Votes";
import VoteStat from "./VoteStat";

const ArticleMeta = ({ article, interactive }) => {
  const { article_id, created_at, author, votes } = article;

  return (
    <summary className="article-meta">
      <div className="details">
        Published {normalizeDate(created_at)} by {author}
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
