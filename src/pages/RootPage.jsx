import React, { useState } from "react";
import ArticleList from "../components/ArticleList";
import SortBar from "../components/SortBar";

const RootPage = () => {
  return (
    <>
      <SortBar />
      <ArticleList readSearchQueries />
    </>
  );
};

export default RootPage;
