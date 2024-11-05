import React from "react";
import ArticleMeta from "./ArticleMeta";

const ArticleCard = ({ article }) => {
  const { article_img_url, title } = article;
  return (
    <article className="article-card card">
      <img src={article_img_url} />
      <h1>{title}</h1>
      <ArticleMeta article={article} />
    </article>
  );
};

export default ArticleCard;
