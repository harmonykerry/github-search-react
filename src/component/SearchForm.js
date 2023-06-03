import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function SearchForm({ handleSearch }) {
  const [mode, setMode] = useState("organisation");
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");
  const handleModeClick = ({ currentTarget }) => {
    setMode(currentTarget.name);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!searchText) {
      setError(true);
    } else {
      setError(false);

      handleSearch(mode, searchText);

      //fetch data
    }
  };

  const handleChange = ({ currentTarget }) => {
    setSearchText(currentTarget.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <ButtonGroup className="mb-3 d-flex justify-content-center">
        <Button
          variant={mode === "organisation" ? "secondary" : "light"}
          onClick={handleModeClick}
          name="organisation"
        >
          Search by Organisation
        </Button>

        <Button
          variant={mode === "UserName" ? "secondary" : "light"}
          onClick={handleModeClick}
          name="userName"
        >
          Search by UserName
        </Button>
      </ButtonGroup>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder={`Enter ${mode}`}
          value={searchText}
          onChange={handleChange}
        />
        {/* if error is true show the placeholder */}
        {error && (
          <Form.Text className="text-danger">
            Please enter a valid {mode}
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3 text-center">
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;
