import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import ArticleMeta from "../components/ArticleMeta";
import CommentList from "../components/CommentList";

const SingleArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => setArticle(data.article))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Todo spinner</div>;

  const { article_img_url, title, body } = article;

  return (
    <>
      <article className="content-wrapper">
        <div className="image-wrapper">
          <img src={article_img_url} />
        </div>
        <h1>{title}</h1>
        <p>{body}</p>
      </article>
      <div className="content-wrapper">
        <hr />
        <ArticleMeta article={article} interactive />
        <hr />
      </div>
      <CommentList articleId={article_id} />
    </>
  );
};

export default SingleArticlePage;
