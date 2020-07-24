import React from "react";
import Imgur from "../Imgur";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Galleries(props) {
  return (
    <Row>
      {props.galleries.map((gallery) => {
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
  );
}

export default Galleries;
