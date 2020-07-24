import React, { useState, useEffect } from "react";
import API from "./Api";
import Container from "react-bootstrap/Container";
import Galleries from "./Components/Galleries";

function App() {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(
          `/gallery/search/?q=dogs&q_type=jpg&q_size_px=small`
        );
        setGalleries(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container fluid className="h-100">
      <Galleries galleries={galleries} />
    </Container>
  );
}

export default App;
