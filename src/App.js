import React from "react";
import Container from "react-bootstrap/Container";
import Galleries from "./Components/Galleries";
import Search from "./Components/Search";
import { GalleriesProvider } from "./GalleriesContext";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="h-100">
      <GalleriesProvider>
        <Row className="mt-5 mb-5">
          <Col>
            <Search />
          </Col>
        </Row>
        <Row>
          <Col>
            <Galleries />
          </Col>
        </Row>
      </GalleriesProvider>
    </Container>
  );
}

export default App;
