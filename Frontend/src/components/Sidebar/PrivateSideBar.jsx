import React, { useState, useEffect } from "react";
import { ListGroup, Collapse } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/NavBar.css";
import AuthService from "../../services/auth.service";
import UserService from "../../services/user.service";

function PrivateSideBar({ menu, students, auth, handleClick }) {
  const navigate = useNavigate();

  const [openCollapsible, setOpenCollapsible] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    UserService.getCurrentUser().then((response) => {
      setFirstName(response.firstname);
      setLastName(response.lastname);
    });
  });

  return (
    <>
      <ListGroup.Item>
        <Link to="#" onClick={handleClick}>
          <i
            className="bi bi-list"
            style={{ fontSize: "2rem", color: "#4b5a6c" }}
          ></i>
        </Link>
        <div className="container">
          <div className="holder">
            <i class="bi bi-image-fill"></i>
          </div>
          <div className="name">
            {firstName} {lastName}
          </div>
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
          handleClick = () => {
            AuthService.logout().then(() => navigate("/"));
          };
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
