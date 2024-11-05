import React, { useEffect, useState } from "react";
import { getArticleComments } from "../utils/api";
import Spinner from "./Spinner";
import CommentCard from "./CommentCard";

const CommentList = ({ articleId, injectThis }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleComments(articleId)
      .then((data) => setComments(data.comments))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setComments((prevVal) => [injectThis, ...prevVal]);
  }, [injectThis]);

  if (isLoading) return <Spinner />;

  return (
    <ul className="content-wrapper">
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <CommentCard data={comment} />
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
