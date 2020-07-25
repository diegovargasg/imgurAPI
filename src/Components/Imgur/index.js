import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import LazyLoad from "react-lazy-load";
import loader from "../../loader.gif";

function Imgur(props) {
  const [show, setShow] = useState(false);
  const [imgurLoaded, setImgurLoaded] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleLoaded = () => {
    setImgurLoaded(true);
  };

  const styleModalFooter = { justifyContent: "flex-start" };

  return (
    <React.Fragment>
      <div className="img-container">
        {!imgurLoaded && (
          <img src={loader} alt="loading..." className="loader" />
        )}
        <LazyLoad>
          <img
            src={props.link}
            onClick={handleShow}
            alt={props.title}
            onLoad={handleLoaded}
            className="imgur"
          />
        </LazyLoad>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.link} width="100%" alt={props.title} />
        </Modal.Body>
        <Modal.Footer style={styleModalFooter}>
          <ul>
            <li>
              <b>Description: </b>
              {props.description}
            </li>
            <li>
              <b>Upvotes: </b>
              {props.ups}
            </li>
            <li>
              <b>Downvotes: </b>
              {props.downs}
            </li>
            <li>
              <b>Score: </b>
              {props.score}
            </li>
          </ul>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default Imgur;
