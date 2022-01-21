import React, { useState, useEffect } from "react";
import { ListGroup, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";
import AuthService from "../../services/auth.service";
import UserService from "../../services/user.service";

function PrivateSideBar({ menu, students, auth, handleClick }) {
  const [openCollapsible, setOpenCollapsible] = useState(false);

  const [fullName, setFullName] = useState("");
  const [initials, setInitals] = useState("");

  useEffect(() => {
    UserService.getCurrentUser().then((response) => {
      const firstName = response.first_name;
      const lastName = response.last_name;
      setFullName(`${firstName} ${lastName}`);
      setInitals(
        `${firstName.charAt(0).toUpperCase()}${lastName
          .charAt(0)
          .toUpperCase()}`
      );
    });
  }, []);

  return (
    <>
      <ListGroup.Item>
        <Link to="#" onClick={handleClick}>
          <i
            className="bi bi-list"
            style={{ fontSize: "2rem", color: "gray" }}
          ></i>
        </Link>
        <div className="container">
          <div className="holder">{initials}</div>
          <div className="name">{fullName}</div>
        </div>
      </ListGroup.Item>

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
        if (item.label === "Logout") {
          handleClick = () => AuthService.logout();
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
    </>
  );
}

export default PrivateSideBar;
