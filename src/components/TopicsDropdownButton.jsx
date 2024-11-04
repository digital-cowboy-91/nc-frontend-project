import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const TopicsDropdownButton = () => {
  const [topics, setTopics] = useState([]);
  const [loadingTopics, setLoadingTopics] = useState(true);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    getTopics()
      .then((data) => setTopics(data.topics))
      .finally(() => setLoadingTopics(false));
  }, []);

  return loadingTopics ? (
    <div>Todo Spinner</div>
  ) : (
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
