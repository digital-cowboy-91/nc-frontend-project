import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SortBar = () => {
  const [queries, setQueries] = useSearchParams();

  const [sortBy, setSortBy] = useState(queries.get("sort_by") ?? "");
  const [orderBy, setOrderBy] = useState(queries.get("order") ?? "");

  const [showTab, setShowTab] = useState(null);

  useEffect(() => {
    const map = new Map();

    queries.forEach((val, key) => map.set(key, val));

    map.set("sort_by", sortBy);
    map.set("order", orderBy);

    const newQueries = {};

    map.forEach((val, key) => {
      if (!val) return;

      newQueries[key] = val;
    });

    setQueries(newQueries);
  }, [sortBy, orderBy]);

  function handleStateChange(newVal, callback) {
    callback((prevVal) => (prevVal === newVal ? null : newVal));
  }

  return (
    <div className="sort-bar">
      <header className={showTab ? "expand" : ""}>
        <button
          className={`tab ${showTab === 1 ? "active" : ""}`}
          onClick={() => handleStateChange(1, setShowTab)}
        >
          Sort By
        </button>
        <button
          className={`tab ${showTab === 2 ? "active" : ""}`}
          onClick={() => handleStateChange(2, setShowTab)}
        >
          Order
        </button>
      </header>
      {showTab === 1 && (
        <ul>
          {[
            ["author", "Author"],
            ["title", "Title"],
            ["created_at", "Date"],
            ["votes", "Votes"],
          ].map(([value, title]) => (
            <li key={value} value={value}>
              <button
                className={sortBy === value ? "active" : ""}
                onClick={() => handleStateChange(value, setSortBy)}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      )}
      {showTab === 2 && (
        <ul>
          {[
            ["asc", "Ascending"],
            ["desc", "Descending"],
          ].map(([value, title]) => (
            <li key={value} value={value}>
              <button
                className={orderBy === value ? "active" : ""}
                onClick={() => handleStateChange(value, setOrderBy)}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortBar;
