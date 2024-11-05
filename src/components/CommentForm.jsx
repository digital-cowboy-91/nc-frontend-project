import React, { useEffect, useState } from "react";
import { postComment } from "../utils/api";

const CommentForm = ({ articleId, onResponse }) => {
  const [isPosting, setIsPosting] = useState(false);
  const [bodyInput, setBodyInput] = useState("");

  function handleSubmit(e) {
    setIsPosting(true);
    e.preventDefault();

    postComment(articleId, {
      username: "grumpy19",
      body: bodyInput,
    })
      .then((data) => onResponse(data.comment))
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
        <button disabled={isPosting}>Send</button>
      </footer>
    </form>
  );
};

export default CommentForm;
