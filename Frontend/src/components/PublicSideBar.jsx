import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, ListGroup, Collapse } from "react-bootstrap";
import data from "./data/sideBarData.json";
import "../styles/NavBar.css";

function PublicSideBar({ menu, auth, handleClick }) {
  return (
    <>
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
