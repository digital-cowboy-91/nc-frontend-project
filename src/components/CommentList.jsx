import React, { useEffect, useReducer, useState } from "react";
import { getArticleComments } from "../utils/api";
import Spinner from "./Spinner";
import CommentCard from "./CommentCard";
import { useRequest } from "../hooks/useRequest";

const CommentList = ({ articleId, injectThis }) => {
  const { data, setData, isProcessing, error, invoke } = useRequest(
    getArticleComments,
    { defaultIsProcessing: true }
  );

  useEffect(() => {
    invoke(articleId);
  }, []);

  useEffect(() => {
    if (!injectThis) return;

    setData((prevVal) => {
      const newVal = structuredClone(prevVal);
      newVal.comments = [injectThis, ...newVal.comments];

      return newVal;
    });
  }, [injectThis]);

  function handleDelete(idToDelete) {
    setData((prevVal) => {
      const newVal = structuredClone(prevVal);
      newVal.comments = newVal.comments.filter(
        ({ comment_id }) => comment_id !== idToDelete
      );

      return newVal;
    });
  }

  if (isProcessing) return <Spinner />;

  return (
    <ul className="content-wrapper">
      {data.comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <CommentCard data={comment} onDelete={handleDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
