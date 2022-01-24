import React, { useState } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import EditStudent from "../../views/students/EditStudent";

function Interaction(props) {
  const navigate = useNavigate();

  const id = props.id
  const [show, setShow] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <ListGroup>
        <ListGroup.Item action href="/students/edit">
          Edit
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Delete
        </ListGroup.Item>
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
