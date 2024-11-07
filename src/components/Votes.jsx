import React, { useContext, useState } from "react";
import { IconLike } from "./icons/IconLike";
import { IconArrow } from "./icons/IconArrow";
import { patchArticle, patchComment } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import { useNavigate, useResolvedPath } from "react-router-dom";

const Votes = ({ defaultValue, type, typeId }) => {
  const localKeyName = `vote-${type}-${typeId}`;

  const [optimisticVotes, setOptimisticVotes] = useState(defaultValue ?? 0);
  const [userVote, setUserVote] = useState(
    Number(localStorage.getItem(localKeyName)) ?? 0
  );
  const [isVoting, setIsVoting] = useState(false);

  const { userCtx } = useContext(UserContext);
  const navigate = useNavigate();
  const path = useResolvedPath();

  function handleRedirect() {
    navigate(`/login?redirect=${path.pathname}`);
  }

  function handleUpdateVote(num) {
    if (!userCtx) return handleRedirect();

    setIsVoting(true);

    let voteValue;
    let realValue = num;
    let prevValue = userVote;

    if (userVote === 0) {
      voteValue = num;
    } else if (userVote === num) {
      voteValue = num * -1;
      realValue = 0;
    } else {
      voteValue = num * 2;
    }

    setOptimisticVotes((prevVal) => prevVal + voteValue);
    setUserVote(realValue);

    let api;

    if (type === "comment") api = patchComment(typeId, voteValue);
    if (type === "article") api = patchArticle(typeId, voteValue);

    if (api) {
      api
        .then(() => {
          localStorage.setItem(localKeyName, realValue);
          // return Promise.reject("cause i want");
        })
        .catch(() => {
          setOptimisticVotes((prevVal) => prevVal + voteValue * -1);
          setUserVote(prevValue);
        })
        .finally(() => setIsVoting(false));
    }
  }

  return (
    <div
      className={`vote-wrapper ${userVote === -1 && "negative"} ${
        userVote === 1 && "positive"
      }`}
    >
      <button
        className="icon-btn"
        onClick={() => handleUpdateVote(-1)}
        disabled={isVoting}
      >
        <IconArrow outline={userVote > 0} />
      </button>
      <span>{optimisticVotes}</span>
      <button
        className="icon-btn"
        onClick={() => handleUpdateVote(1)}
        disabled={isVoting}
      >
        <IconArrow
          outline={userVote < 0}
          style={{ transform: "rotateZ(180deg)" }}
        />
      </button>
    </div>
  );
};

export default Votes;
