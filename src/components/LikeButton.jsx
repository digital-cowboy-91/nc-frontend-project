import React from "react";
import { IconHeart } from "./icons/IconHeart";

const LikeButton = ({ value, interactive }) => {
  return (
    <button className="btn-like" disabled={!interactive}>
      <span>{value ?? 0}</span>
      <IconHeart />
    </button>
  );
};

export default LikeButton;
