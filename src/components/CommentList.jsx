import React, { useEffect, useReducer, useState } from "react";
import { getArticleComments } from "../utils/api";
import Spinner from "./Spinner";
import CommentCard from "./CommentCard";
import { useRequest } from "../hooks/useRequest";
import Pagination from "./Pagination";

const CommentList = ({ articleId, injectThis }) => {
  const [queries, setQueries] = useState(undefined);

  const {
    data: { comments, pagination },
    setData,
    isProcessing,
    error,
    invoke,
  } = useRequest(getArticleComments, {
    defaultData: {},
    defaultIsProcessing: true,
  });

  useEffect(() => {
    invoke({ withArgs: [articleId, queries] });
  }, [queries]);

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
    <>
      <ul className="content-wrapper">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard data={comment} onDelete={handleDelete} />
            </li>
          );
        })}
      </ul>
      <Pagination data={pagination} onPageChange={(q) => setQueries(q)} />
    </>
  );
};

export default CommentList;
