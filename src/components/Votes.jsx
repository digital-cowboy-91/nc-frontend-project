import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useRequest } from "../hooks/useRequest";
import { patchArticle, patchComment } from "../utils/api";
import { IconArrow } from "./icons/IconArrow";

const Votes = ({ defaultValue, type, typeId }) => {
  const { userCtx } = useContext(UserContext);
  const [optimisticVotes, setOptimisticVotes] = useState(defaultValue ?? 0);

  const navigate = useNavigate();
  const path = useResolvedPath();

  const localKeyName = `vote-${type}-${typeId}`;
  const APIs = new Map([
    ["comment", patchComment],
    ["article", patchArticle],
  ]);
  const {
    data: userVote,
    setData: setUserVote,
    isProcessing,
    invoke,
  } = useRequest(APIs.get(type), {
    defaultData: Number(localStorage.getItem(localKeyName)) ?? 0,
  });

  function handleRedirect() {
    navigate(`/login?redirect=${path.pathname}`);
  }

  function handleUpdateVote(num) {
    if (!userCtx) return handleRedirect();

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

    invoke({
      withArgs: [typeId, voteValue],
      onSuccess: () => {
        localStorage.setItem(localKeyName, realValue);
        return realValue;
      },
      onError: () => {
        setOptimisticVotes((prevVal) => prevVal + voteValue * -1);
        setUserVote(prevValue);
      },
    });
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
        disabled={isProcessing}
      >
        <IconArrow outline={userVote > 0} />
      </button>
      <span>{optimisticVotes}</span>
      <button
        className="icon-btn"
        onClick={() => handleUpdateVote(1)}
        disabled={isProcessing}
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
