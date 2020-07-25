import _ from "lodash";
import React, { useContext } from "react";
import Imgur from "../Imgur";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GalleriesContext } from "../../GalleriesContext";

function Galleries(props) {
  const [galleries, setGalleries] = useContext(GalleriesContext);

  if (galleries.lenght === 0) {
    return null;
  }

  return (
    <Row>
      {galleries.map((gallery) => {
        const images = _.get(gallery, "images", false);
        const galleryTitle = _.get(gallery, "title", "");

        if (!images) {
          return null;
        }

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
