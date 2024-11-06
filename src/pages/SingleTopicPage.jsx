import React from "react";
import ArticleList from "../components/ArticleList";
import { useParams } from "react-router-dom";

const SingleTopicPage = () => {
  const { slug } = useParams();

  return (
    <>
      <ArticleList queries={{ topic: slug }} />
    </>
  );
};

export default SingleTopicPage;
