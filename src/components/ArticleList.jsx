import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Spinner from "./Spinner";

const ArticleList = ({ queries }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getArticles(queries)
      .then((data) => setArticles(data.articles))
      .finally(() => setIsLoading(false));
  }, [queries]);

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
