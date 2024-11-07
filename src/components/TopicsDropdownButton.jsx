import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const TopicsDropdownButton = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    getTopics()
      .then((data) => setTopics(data.topics))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loader />;

  return (
    Boolean(topics?.length) && (
      <div className="dropdown-button ">
        <button onClick={() => setShowItems((prev) => !prev)}>Topics</button>
        <ul className={showItems ? "show" : "hide"}>
          {topics.map(({ slug }) => (
            <li key={slug}>
              <Link to={`/topics/${slug}`} onClick={() => setShowItems(false)}>
                {slug}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default TopicsDropdownButton;
