import React, { useState } from "react";
import ArticleList from "../components/ArticleList";
import { useParams } from "react-router-dom";
import SortBar from "../components/SortBar";

const SingleTopicPage = () => {
  const { slug } = useParams();
  const [queries, setQueries] = useState({});

  return (
    <>
      <SortBar onUpdateQuery={setQueries} />
      <ArticleList queries={{ ...queries, topic: slug }} />
    </>
  );
};

export default SingleTopicPage;
