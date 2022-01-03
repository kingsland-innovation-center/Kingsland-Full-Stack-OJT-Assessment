import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

function NavBarMenu() {
  return (
    <>
      <Router>
        <div className="list-group" id="myList" role="tablist">
          <a
            className="list-group-item list-group-item-action active"
            data-toggle="list"
            href="#home"
            role="tab"
          >
            Home
          </a>
          <a
            className="list-group-item list-group-item-action"
            data-toggle="list"
            href="#profile"
            role="tab"
          >
            Profile
          </a>
          <a
            className="list-group-item list-group-item-action"
            data-toggle="list"
            href="#messages"
            role="tab"
          >
            Messages
          </a>
          <a
            className="list-group-item list-group-item-action"
            data-toggle="list"
            href="#settings"
            role="tab"
          >
            Settings
          </a>
        </div>
      </Router>
    </>
  );
}

export default NavBarMenu;
