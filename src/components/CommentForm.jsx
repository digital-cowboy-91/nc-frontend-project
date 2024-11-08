import React, { useContext, useEffect, useState } from "react";
import { postComment } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import CustomButton from "./CustomButton";
import { useRequest } from "../hooks/useRequest";

const CommentForm = ({ articleId, onResponse }) => {
  const { userCtx } = useContext(UserContext);
  const [bodyInput, setBodyInput] = useState("");

  const { data, isProcessing, invoke } = useRequest(postComment);

  useEffect(() => {
    if (!data) return;

    setBodyInput("");
    onResponse(data.comment);
  }, [data]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!userCtx || bodyInput.length < 3) return;

    invoke(articleId, {
      username: userCtx,
      body: bodyInput,
    });
  }

  return (
    <form className="comment-form content-wrapper" onSubmit={handleSubmit}>
      <textarea
        placeholder="Type your comment..."
        rows="5"
        disabled={isProcessing}
        value={bodyInput}
        onChange={(e) => setBodyInput(e.target.value)}
      />
      <footer>
        <CustomButton disabled={isProcessing || bodyInput.length < 3}>
          Send
        </CustomButton>
      </footer>
    </form>
  );
};

export default CommentForm;
