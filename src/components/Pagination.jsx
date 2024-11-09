import React from "react";
import { useSearchParams } from "react-router-dom";
import { DoubleArrowLeft } from "./icons/DoubleArrow";
import CustomButton from "./CustomButton";
import "./Pagination.style.css";

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

  if (!prev_page && !next_page) return;

  return (
    <div className="pagination">
      <CustomButton
        square
        secondary
        border
        onClick={() => handlePageChange(prev_page)}
        disabled={!prev_page}
      >
        <DoubleArrowLeft />
      </CustomButton>
      <div className="pages">
        {pages.map((page) => (
          <CustomButton
            square
            secondary
            active={current_page === page}
            rounded={false}
            key={page}
            scaleOnClick={false}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </CustomButton>
        ))}
      </div>
      <CustomButton
        square
        secondary
        border
        onClick={() => handlePageChange(next_page)}
        disabled={!next_page}
      >
        <DoubleArrowLeft style={{ transform: "rotate(180deg)" }} />
      </CustomButton>
    </div>
  );
};

export default Pagination;
