import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const TopicList = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics()
      .then((data) => setTopics(data.topics))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Spinner />;

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
