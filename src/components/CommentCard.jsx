import React from "react";
import { normalizeDate } from "../utils/normalizeDate";
import Votes from "./Votes";
import DeleteCardButton from "./DeleteCardButton";

const CommentCard = ({ data, onDelete }) => {
  const { comment_id, author, created_at, body, votes } = data;

  return (
    <div className="comment-card card content-wrapper">
      <header>
        <span className="author">{author}</span>
        <span className="date">
          {normalizeDate(created_at, { dateStyle: "short" })}
        </span>
      </header>
      <div>{body}</div>
      <footer>
        <DeleteCardButton commentId={comment_id} onDelete={onDelete} />
        <Votes defaultValue={votes} type="comment" typeId={comment_id} />
      </footer>
    </div>
  );
};

export default CommentCard;
