import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

/**
 * Nothing to do here.
 * Make sure you include this in the sidebar for unauthenticated users.
 */
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <Container className="h-75 d-flex align-items-center justify-content-center">
      <div className="white-wrap d-flex flex-column align-items-center justify-content-center">
        <h2>Welcome, Prospect Intern.</h2>
        All available routes can be found under <b>Frontend/src/Routes.jsx</b>.
        <p>
          This task is a simulated assessment measuring how well you integrate
          your changes to an existing project.
        </p>
        <p>
          There is no time limit. Once you are ready, just submit a pull request
          to the main repository.
        </p>
        <p>
          If you have questions, reach out to{" "}
          <a href="mailto:internships@careers.kingsland.io">
            internships@careers.kingsland.io
          </a>
          .
        </p>
        <Button
          className="my-3"
          variant="primary"
          type="submit"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          variant="secondary"
          type="submit"
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </div>
    </Container>
  );
};

export default Welcome;
