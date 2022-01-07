import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, ListGroup, Collapse } from "react-bootstrap";
import data from "./data/sideBarData.json";
import "../styles/NavBar.css";
import AuthService from "../services/auth.service";

function PrivateSideBar({ menu, students, auth, handleClick }) {
  const [openCollapsible, setOpenCollapsible] = useState(false);
  console.log(AuthService.getCurrentUser())
  return (
    <>
      {menu.map((item) => {
        if (item.label === "Students") {
          return (
            <div key="div">
              <ListGroup.Item
                key={item.key}
                action
                href={item.path}
                onClick={() => setOpenCollapsible(!openCollapsible)}
              >
                <div className="expand-logo">
                  Students
                  {openCollapsible ? (
                    <i className="bi bi-chevron-up"></i>
                  ) : (
                    <i className="bi bi-chevron-down"></i>
                  )}
                </div>
              </ListGroup.Item>

              {students.map((item) => {
                return (
                  <Collapse in={openCollapsible} key={item.key}>
                    <ListGroup.Item
                      key={item.key}
                      action
                      href={item.path}
                      onClick={handleClick}
                    >
                      <span className="item">{item.label}</span>
                    </ListGroup.Item>
                  </Collapse>
                );
              })}
            </div>
          );
        }
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

export default PrivateSideBar;
