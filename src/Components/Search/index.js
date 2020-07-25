import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../Api";
import { GalleriesContext } from "../../GalleriesContext";

function Search(props) {
  const [galleries, setGalleries] = useContext(GalleriesContext);
  const [image, setImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return false;
    }

    try {
      const response = await API.get(
        `/gallery/search/?q=${image}&q_type=jpg&q_size_px=small`
      );
      setGalleries(response.data.data);
    } catch (error) {
      console.error(error);
    }
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
        <Form.Control as="select" defaultValue="top">
          <option value="top">Top</option>
          <option value="time">Time</option>
          <option value="viral">Viral</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Window:</Form.Label>
        <Form.Control as="select" defaultValue="all">
          <option value="all">All</option>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Check type="switch" id="virals-switch" label="Include virals" />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button variant="primary" type="submit">
          Search
        </Button>
        <Button variant="secondary" type="reset" className="ml-2">
          Reset
        </Button>
      </div>
    </Form>
  );
}

export default Search;
