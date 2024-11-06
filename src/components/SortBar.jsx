import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SortBar = ({ onUpdateQuery }) => {
  const [queries, setQueries] = useSearchParams();

  const [sortBy, setSortBy] = useState(queries.get("sort_by") ?? "");
  const [orderBy, setOrderBy] = useState(queries.get("order") ?? "");

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
    onUpdateQuery(newQueries);
  }, [sortBy, orderBy]);

  return (
    <div className="sort-bar">
      <label htmlFor="query-sort-by">
        Sort by
        <select
          id="query-sort-by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value=""></option>
          <option value="author">Author</option>
          <option value="title">Title</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <label htmlFor="query-order">
        Order by
        <select
          id="query-order"
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value)}
        >
          <option value=""></option>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </div>
  );
};

export default SortBar;
