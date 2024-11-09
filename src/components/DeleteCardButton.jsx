import React, { useState } from "react";
import Loader from "./Loader";
import { deleteComment } from "../utils/api";
import CustomButton from "./CustomButton";
import { useRequest } from "../hooks/useRequest";

const DeleteCardButton = ({ commentId, onDelete }) => {
  const { isProcessing, invoke } = useRequest(deleteComment);

  function handleDelete() {
    invoke({ withArgs: [commentId], onSuccess: () => onDelete(commentId) });
  }

  if (isProcessing) return <Loader />;

  return (
    <CustomButton small onClick={handleDelete}>
      Delete
    </CustomButton>
  );
};

export default DeleteCardButton;
