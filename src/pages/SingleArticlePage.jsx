import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useResolvedPath } from "react-router-dom";
import { getArticleById } from "../utils/api";
import ArticleMeta from "../components/ArticleMeta";
import CommentList from "../components/CommentList";
import Spinner from "../components/Spinner";
import CommentForm from "../components/CommentForm";
import { UserContext } from "../contexts/UserContext";

const SingleArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [injectComment, setInjectComment] = useState();
  const { userCtx } = useContext(UserContext);
  const path = useResolvedPath();

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => setArticle(data.article))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Spinner />;

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
