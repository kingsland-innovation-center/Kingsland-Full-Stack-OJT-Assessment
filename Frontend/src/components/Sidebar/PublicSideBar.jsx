import React from "react";
import { ListGroup } from "react-bootstrap";
import "../../styles/NavBar.css";

function PublicSideBar({ menu, auth, handleClick }) {
  return (
    <>
      <ListGroup.Item action href="#link1" onClick={handleClick}>
        <i className="bi bi-list" style={{ fontSize: "2rem" }}></i>
      </ListGroup.Item>
      {menu.map((item) => {
        return (
          <ListGroup.Item
            key={item.key}
            action
            href={item.path}
            onClick={handleClick}
          >
            {item.label}
          </ListGroup.Item>
        );
      })}
      <ListGroup.Item className="menu-item-breaker" />
      {auth.map((item) => {
        return (
          <ListGroup.Item
            key={item.key}
            action
            href={item.path}
            onClick={handleClick}
          >
            {item.label}
          </ListGroup.Item>
        );
      })}
    </>
  );
}

export default PublicSideBar;
