import React from "react";
import { defaultStatusObjects } from "../utils/defaultStatusObjects";
import CustomButton from "./CustomButton";

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
        <CustomButton as="link" to={-1}>
          Return
        </CustomButton>
        <CustomButton as="link" to="/">
          Go to Home page
        </CustomButton>
      </footer>
    </article>
  );
};

export default ErrorCard;
