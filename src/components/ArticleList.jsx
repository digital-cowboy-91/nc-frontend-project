import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Spinner from "./Spinner";
import { useRequest } from "../hooks/useRequest";

const ArticleList = ({ queries, onError }) => {
  const { data, isProcessing, error, invoke } = useRequest(getArticles, {
    defaultIsProcessing: true,
  });

  useEffect(() => {
    if (error) {
      onError(error);
      return;
    }

    invoke(queries);
  }, [queries, error]);

  if (isProcessing) return <Spinner />;
  if (error) return;

  const { articles } = data;

  return (
    <>
      <ul className="article-list">
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
    </>
  );
};

export default ArticleList;
