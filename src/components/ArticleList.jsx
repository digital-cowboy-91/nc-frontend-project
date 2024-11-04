import React, { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => setArticles(data.articles));
  }, []);

  return (
    <ul>
      {articles.map((article) => {
        const { article_id } = article;
        return (
          <li key={article_id}>
            <Link to={`/article/${article_id}`}>
              <ArticleCard article={article} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleList;
