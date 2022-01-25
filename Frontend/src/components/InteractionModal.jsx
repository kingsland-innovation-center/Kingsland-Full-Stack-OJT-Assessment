import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function InteractionModal(props) {
  const { showModal, setShowModal, confirmModal, message } = props;

  const handleClose = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Modal centered show={showModal} onHide={handleClose}>
        <Modal.Body>
          <p style={{justifyContent: 'center'}}>{message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmModal}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InteractionModal;
