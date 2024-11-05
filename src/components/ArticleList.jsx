import React, { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((data) => setArticles(data.articles))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Spinner />;

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
