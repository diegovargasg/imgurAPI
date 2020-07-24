import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import loaderGif from "./loader.gif";

function Imgur(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const styleModalFooter = { justifyContent: "flex-start" };

  return (
    <React.Fragment>
      <div className="img-container">
        <img src={props.link} onClick={handleShow} alt={props.title} />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.link} width="100%" />
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
