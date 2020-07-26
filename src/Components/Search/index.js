import _ from "lodash";
import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import API from "../../Api";
import { GalleriesContext } from "../../GalleriesContext";

function Search(props) {
  const [galleries, setGalleries] = useContext(GalleriesContext);
  const [image, setImage] = useState("");
  const [sort, setSort] = useState("top");
  const [window, setWindow] = useState("all");
  const [showError, setShowError] = useState(false);
  const [showViral, setShowViral] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowSpinner(true);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return false;
    }

    try {
      const response = await API.get(
        `/gallery/search/${sort}/${window}/?q=${image}&q_type=jpg&q_size_px=small&showViral=${showViral}`
      );
      setGalleries(response.data.data);
      if (_.size(response.data.data) === 0) {
        setShowError(true);
      }
    } catch (error) {
      console.error(error);
    }
    setShowSpinner(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Search for images</Form.Label>
        <Form.Control
          type="text"
          required
          minLength="2"
          maxLength="10"
          autoComplete="off"
          onChange={(event) => setImage(event.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Sort by:</Form.Label>
        <Form.Control
          as="select"
          defaultValue="top"
          onChange={(event) => setSort(event.target.value)}
        >
          <option value="top">Top</option>
          <option value="time">Time</option>
          <option value="viral">Viral</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Window:</Form.Label>
        <Form.Control
          as="select"
          defaultValue="all"
          onChange={(event) => setWindow(event.target.value)}
        >
          <option value="all">All</option>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="virals-switch"
          label="Include virals"
          checked={showViral}
          onChange={(event) => {
            setShowViral(!showViral);
          }}
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button variant="primary" type="submit">
          {showSpinner && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}{" "}
          Search
        </Button>
        <Button variant="secondary" type="reset" className="ml-2">
          Reset
        </Button>
      </div>
      {showError && (
        <Alert variant="danger" className="mt-5">
          No images found.
        </Alert>
      )}
    </Form>
  );
}

export default Search;
