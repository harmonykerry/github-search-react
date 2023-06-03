import React from "react";
import Alert from "react-bootstrap/Alert";

function ErrorMessage() {
  return (
    <Alert variant="danger">
      Failed to perform a search, please try again later
    </Alert>
  );
}

export default ErrorMessage;
