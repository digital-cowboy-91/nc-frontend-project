import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useRequest } from "../hooks/useRequest";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

const ArticleList = ({ onError, readSearchQueries }) => {
  const [queries] = useSearchParams();

  const {
    data: { articles, pagination },
    isProcessing,
    error,
    invoke,
  } = useRequest(getArticles, {
    defaultData: {},
    defaultIsProcessing: true,
  });

  // console.log({ articles, pagination, isProcessing, error });

  useEffect(() => {
    if (error) {
      onError(error);
      return;
    }

    invoke({ withArgs: readSearchQueries ? [queries] : [] });
  }, [queries]);

  if (isProcessing) return <Spinner />;
  if (error) return;

  return (
    <>
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
      <Pagination data={pagination} pushToQuery />
    </>
  );
};

export default ArticleList;
