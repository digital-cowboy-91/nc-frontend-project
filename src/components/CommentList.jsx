import React, { useEffect, useState } from "react";
import { getArticleComments } from "../utils/api";
import Loader from "./Loader";
import { normalizeDate } from "../utils/normalizeDate";
import LikeButton from "./LikeButton";
import VoteButton from "./VoteButton";

const CommentList = ({ articleId }) => {
  const [reload, setReload] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleComments(articleId)
      .then((data) => setComments(data.comments))
      .finally(() => setIsLoading(false));
  }, [reload]);

  if (isLoading) return <Loader />;

  return (
    <ul className="layout-wrapper">
      {comments.map(({ comment_id, author, created_at, body, votes }) => {
        return (
          <li key={comment_id} className="comment-card card content-wrapper">
            <header>
              <span className="author">{author}</span>
              <span className="date">
                {normalizeDate(created_at, { dateStyle: "short" })}
              </span>
            </header>
            <div>{body}</div>
            <footer>
              <button>TODO Delete</button>
              <VoteButton />
            </footer>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
