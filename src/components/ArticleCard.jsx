import React from "react";
import ArticleMeta from "./ArticleMeta";
import "./ArticleCard.style.css";

const ArticleCard = ({ article }) => {
  const { article_img_url, title } = article;
  return (
    <article className="article-card card">
      <div className="image-wrapper">
        <img src={article_img_url} />
      </div>
      <h1>{title}</h1>
      <ArticleMeta article={article} />
    </article>
  );
};

export default ArticleCard;
