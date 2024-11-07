import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ children, className, as, ...props }) => {
  return as === "link" ? (
    <Link className={`btn ${className}`} {...props}>
      {children}
    </Link>
  ) : (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
