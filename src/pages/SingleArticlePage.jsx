import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useResolvedPath } from "react-router-dom";
import { getArticleById } from "../utils/api";
import ArticleMeta from "../components/ArticleMeta";
import CommentList from "../components/CommentList";
import Spinner from "../components/Spinner";
import CommentForm from "../components/CommentForm";
import { UserContext } from "../contexts/UserContext";
import { useRequest } from "../hooks/useRequest";
import ErrorCard from "../components/ErrorCard";

const SingleArticlePage = () => {
  const { article_id } = useParams();
  const [injectComment, setInjectComment] = useState();
  const { userCtx } = useContext(UserContext);
  const path = useResolvedPath();

  const { data, isProcessing, error, invoke } = useRequest(getArticleById, {
    defaultIsProcessing: true,
  });

  useEffect(() => {
    invoke(article_id);
  }, []);

  if (isProcessing) return <Spinner />;
  if (error) return <ErrorCard error={error} />;

  const { article } = data;
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
      {userCtx ? (
        <CommentForm
          articleId={article_id}
          onResponse={(comment) => setInjectComment(comment)}
        />
      ) : (
        <Link to={`/login?redirect=${path.pathname}`}>
          Login first to comment
        </Link>
      )}
      <CommentList articleId={article_id} injectThis={injectComment} />
    </>
  );
};

export default SingleArticlePage;
