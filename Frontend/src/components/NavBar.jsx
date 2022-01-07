import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, ListGroup, Collapse } from "react-bootstrap";
import data from "./data/sideBarData.json";
import "../styles/NavBar.css";
import { isAuthPublicRoute } from "../routes/utils/authUtils";
import PublicSideBar from "./PublicSideBar";
import PrivateSideBar from "./PrivateSideBar";

function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const navBarClass = sidebar ? "nav-menu active" : "nav-menu";

  const sideBarLabels = isAuthPublicRoute()
    ? data.unauthenticated
    : data.authenticated;
  const [activePage, setActivePage] = useState("");
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

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
          {isAuthPublicRoute() ? (
            <PublicSideBar
              menu={sideBarLabels.menu}
              auth={sideBarLabels.auth}
              handleClick={showSidebar}
            />
          ) : (
            <PrivateSideBar
              menu={sideBarLabels.menu}
              students={sideBarLabels.students}
              auth={sideBarLabels.auth}
              handleClick={showSidebar}
            />
          )}
        </ListGroup>
      </Nav>
    </>
  );
}

export default NavBar;
