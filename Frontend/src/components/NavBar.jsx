import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, ListGroup, Button } from "react-bootstrap";
import data from "./data/sideBarData.json";
import "../styles/NavBar.css";

function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const navBarClass = sidebar ? "nav-menu active" : "nav-menu";

  const sideBarLabels = data.unauthenticated;
  const [activePage, setActivePage] = useState("");

  console.log(activePage);
  const showSidebar = () => {setSidebar(!sidebar);}

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars" onClick={showSidebar}>
          <i
            className="bi bi-list"
            style={{ fontSize: "2rem", color: "gray" }}
          ></i>
        </Link>
      </div>
      <Nav
        defaultActiveKey={activePage}
        onSelect={(selectedKey) => setActivePage(selectedKey)}
        className="nav nav-pills"
      >
        <ListGroup className={navBarClass}>
          <ListGroup.Item action href="#link1" onClick={showSidebar}>
            <i className="bi bi-list" style={{ fontSize: "2rem" }}></i>
          </ListGroup.Item>
          {sideBarLabels.menu.map((item, index) => {
            return (
              <ListGroup.Item
                key={index}
                action
                href={item.path}
                className="item"
                onClick={showSidebar}
              >
                {item.label}
              </ListGroup.Item>
            );
          })}
          <ListGroup.Item className="menu-item-breaker" />

          {sideBarLabels.auth.map((item, index) => {
            return (
              <ListGroup.Item
                key={index}
                action
                href={item.path}
                className="item"
                onClick={showSidebar}
              >
                {item.label}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Nav>
    </>
  );
}

export default NavBar;
