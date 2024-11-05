import React from "react";
import { IconLike } from "./icons/IconLike";
import { IconDislike } from "./icons/IconDislike";

const Votes = ({ value }) => {
  return (
    <div className="vote-wrapper">
      <button className="icon-btn">
        <IconDislike />
      </button>
      <span>{value ?? 0}</span>
      <button className="icon-btn">
        <IconLike />
      </button>
    </div>
  );
};

export default Votes;
