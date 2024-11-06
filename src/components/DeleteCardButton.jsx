import React, { useState } from "react";
import Loader from "./Loader";
import { deleteComment } from "../utils/api";

const DeleteCardButton = ({ commentId, onDelete }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  function handleDelete() {
    setIsProcessing(true);

    deleteComment(commentId)
      .then(() => onDelete(commentId))
      .finally(() => setIsProcessing(false));
  }

  if (isProcessing) return <Loader style={{ scale: "0.5" }} />;

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteCardButton;
