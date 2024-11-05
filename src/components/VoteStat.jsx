import React from "react";
import { IconHeart } from "./icons/IconHeart";
import { IconHeartBroken } from "./icons/IconHeartBroken";

const VoteStat = ({ value }) => {
  return (
    <div className="vote-stat">
      <span>{value ?? 0}</span>
      {value >= 0 ? <IconHeart /> : <IconHeartBroken />}
    </div>
  );
};

export default VoteStat;
