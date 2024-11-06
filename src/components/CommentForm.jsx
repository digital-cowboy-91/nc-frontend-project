import React, { useContext, useEffect, useState } from "react";
import { postComment } from "../utils/api";
import { UserContext } from "../contexts/UserContext";

const CommentForm = ({ articleId, onResponse }) => {
  const [isPosting, setIsPosting] = useState(false);
  const [bodyInput, setBodyInput] = useState("");
  const { userCtx } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (!userCtx) return;

    setIsPosting(true);

    postComment(articleId, {
      username: userCtx,
      body: bodyInput,
    })
      .then((data) => {
        setBodyInput("");
        onResponse(data.comment);
      })
      .finally(() => setIsPosting(false));
  }

  return (
    <form className="comment-form content-wrapper" onSubmit={handleSubmit}>
      <textarea
        placeholder="Type your comment..."
        rows="5"
        disabled={isPosting}
        value={bodyInput}
        onChange={(e) => setBodyInput(e.target.value)}
      />
      <footer>
        <button disabled={isPosting || bodyInput.length < 3}>Send</button>
      </footer>
    </form>
  );
};

export default CommentForm;
