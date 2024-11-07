import React from "react";
import { defaultStatusObjects } from "../utils/defaultStatusObjects";
import { Link } from "react-router-dom";

const ErrorCard = ({ defaultStatus, error }) => {
  const { status, message, path } = defaultStatus
    ? defaultStatusObjects.get(defaultStatus)
    : error;

  return (
    <article className="error-card">
      <h1>{status}</h1>
      <p className="message">{message}</p>
      {path && (
        <p className="details">
          This occurred at <code>{path}</code>
        </p>
      )}
      <footer>
        <Link to={-1}>Return</Link>
        <Link to="/">Go to Home page</Link>
      </footer>
    </article>
  );
};

export default ErrorCard;
