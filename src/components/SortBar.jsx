import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CustomButton from "./CustomButton";
import "./SortBar.style.css";

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
        <CustomButton
          rounded={false}
          active={showTab === 1}
          secondary
          onClick={() => handleStateChange(1, setShowTab)}
        >
          Sort By
        </CustomButton>
        <CustomButton
          rounded={false}
          active={showTab === 2}
          secondary
          onClick={() => handleStateChange(2, setShowTab)}
        >
          Order
        </CustomButton>
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
              <CustomButton
                tertiary
                active={sortBy === value}
                pill
                small
                onClick={() => handleStateChange(value, setSortBy)}
              >
                {title}
              </CustomButton>
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
              <CustomButton
                tertiary
                active={orderBy === value}
                pill
                small
                onClick={() => handleStateChange(value, setOrderBy)}
              >
                {title}
              </CustomButton>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortBar;
