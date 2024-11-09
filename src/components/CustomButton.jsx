import React from "react";
import { Link } from "react-router-dom";
import "./CustomButton.style.css";

const CustomButton = ({
  children,
  square,
  rounded = true,
  pill,
  small,
  secondary,
  tertiary,
  active,
  border,
  className,
  scaleOnClick = true,
  as,
  ...props
}) => {
  const classes = [
    "btn",
    square && "btn-square",
    rounded && "btn-rounded",
    pill && "btn-pill",
    small && "btn-small",
    secondary && "btn-secondary",
    tertiary && "btn-tertiary",
    active && "btn-active",
    border && "btn-border",
    scaleOnClick && "btn-scale-on-click",
    className,
  ]
    .filter((c) => c)
    .join(" ");

  return as === "link" ? (
    <Link className={classes} {...props}>
      {children}
    </Link>
  ) : (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
