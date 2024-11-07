import React, { useState } from "react";
import Loader from "./Loader";
import { deleteComment } from "../utils/api";
import CustomButton from "./CustomButton";

const DeleteCardButton = ({ commentId, onDelete }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  function handleDelete() {
    setIsProcessing(true);

    deleteComment(commentId)
      .then(() => onDelete(commentId))
      .finally(() => setIsProcessing(false));
  }

  if (isProcessing) return <Loader />;

  return <CustomButton onClick={handleDelete}>Delete</CustomButton>;
};

export default DeleteCardButton;
