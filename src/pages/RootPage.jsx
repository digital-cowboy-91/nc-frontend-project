import React, { useState } from "react";
import ArticleList from "../components/ArticleList";
import SortBar from "../components/SortBar";

const RootPage = () => {
  const [queries, setQueries] = useState({});
  return (
    <>
      <SortBar onUpdateQuery={setQueries} />
      <ArticleList queries={queries} />
    </>
  );
};

export default RootPage;
