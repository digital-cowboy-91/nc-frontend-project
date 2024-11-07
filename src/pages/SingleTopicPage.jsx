import React, { useState } from "react";
import ArticleList from "../components/ArticleList";
import { useParams } from "react-router-dom";
import SortBar from "../components/SortBar";
import ErrorCard from "../components/ErrorCard";

const SingleTopicPage = () => {
  const { slug } = useParams();
  const [queries, setQueries] = useState({});
  const [error, setError] = useState(null);

  if (error) return <ErrorCard error={error} />;

  return (
    <>
      <SortBar onUpdateQuery={setQueries} />
      <ArticleList
        queries={{ ...queries, topic: slug }}
        onError={(data) => setError(data)}
      />
    </>
  );
};

export default SingleTopicPage;
