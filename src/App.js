import React, { useState, useEffect } from "react";
import API from "./Api";
import Imgur from "./Imgur";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <Row>
        {galleries.map((gallery) => {
          const images = gallery["images"];
          const galleryTitle = gallery["title"];
          return (
            <React.Fragment>
              {images.map((image) => {
                if (image.type !== "image/jpeg") {
                  return null;
                }
                return (
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="img-wrapper">
                      <Imgur {...image} title={galleryTitle} />
                      <span>{galleryTitle}</span>
                    </div>
                  </Col>
                );
              })}
            </React.Fragment>
          );
        })}
      </Row>
    </Container>
  );
}

export default App;
