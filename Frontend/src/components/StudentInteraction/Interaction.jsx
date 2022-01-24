import React, { useState } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import data from "../data/modalMessage.json";
import InteractionModal from "../InteractionModal";
import StudentService from "../../services/student.service";

function Interaction(props) {
  const id = props.id;
  const modalMessage = data.delete.message;

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleConfirm = () => {
    StudentService.deleteStudent(id)
    setShow(!show)
  }

  const popover = (
    <Popover id="popover-basic">
      <ListGroup>
        <ListGroup.Item action href={`/students/edit/${id}`}>
          Edit
        </ListGroup.Item>
        <ListGroup.Item action onClick={handleShow}>
          Delete
        </ListGroup.Item>
        <InteractionModal
            showModal={show}
            setShowModal={setShow}
            confirmModal={handleConfirm}
            message={modalMessage}
          />
      </ListGroup>
    </Popover>
  );
  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="link">
        <i className="bi bi-three-dots-vertical" style={{ color: "gray" }}></i>
      </Button>
    </OverlayTrigger>
  );
}

export default Interaction;
