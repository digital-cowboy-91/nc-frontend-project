import React from "react";

const ErrorCard = ({ error }) => {
  const { status, message, path } = error;
  return (
    <div className="error-card">
      <h1>{status}</h1>
      <p className="message">{message}</p>
      <p className="details">
        This occurred at <code>{path}</code>
      </p>
    </div>
  );
};

export default ErrorCard;
