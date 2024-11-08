import React from "react";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ data, onPageChange, pushToQuery = false }) => {
  const { current_page, next_page, prev_page, total_count, total_pages } = data;

  const [queries, setQueries] = useSearchParams();

  const pages = Array.from({ length: total_pages }, (i, index) => index + 1);

  function handlePageChange(num) {
    const map = new Map();

    queries.forEach((val, key) => map.set(key, val));

    if (num) map.set("page", num);

    const newQueries = {};

    map.forEach((val, key) => {
      if (!val) return;

      newQueries[key] = val;
    });

    onPageChange && onPageChange(newQueries);
    pushToQuery && setQueries(newQueries);
  }

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(prev_page)} disabled={!prev_page}>
        Previous
      </button>
      <div className="pages">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={current_page === page ? "active" : ""}
            style={{ fontWeight: current_page === page ? "700" : "" }}
          >
            {page}
          </button>
        ))}
      </div>
      <button onClick={() => handlePageChange(next_page)} disabled={!next_page}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
