import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";
import { useRequest } from "../hooks/useRequest";

const TopicList = () => {
  const {
    data: topics,
    isProcessing,
    invoke,
  } = useRequest(getTopics, { defaultIsProcessing: true });

  useEffect(() => {
    invoke({ onSuccess: (res) => res.topics });
  }, []);

  if (isProcessing) return <Spinner />;

  return (
    <ul className="topics-wrapper">
      {topics.map(({ slug, description }) => {
        return (
          <li key={slug}>
            <Link to={`/topics/${slug}`}>
              <span>{slug}</span>
              <div className="overlay">{description}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TopicList;
