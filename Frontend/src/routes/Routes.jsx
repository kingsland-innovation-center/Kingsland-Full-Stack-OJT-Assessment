import React from "react";
import {
  Login,
  Welcome,
  Register,
  Dashboard,
  AddStudent,
  Students,
} from "../views";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import EditStudent from "../views/students/EditStudent";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<PublicRoute />}>
          <Route exact path="/" element={<Welcome />} />.
        </Route>

        <Route exact path="/login" element={<PublicRoute />}>
          <Route exact path="/login" element={<Login />} />
        </Route>

        <Route exact path="/register" element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />{" "}
        </Route>

        <Route exact path="/dashboard" element={<PrivateRoute />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route exact path="/students" element={<PrivateRoute />}>
          <Route exact path="/students" element={<Students />} />
        </Route>

        <Route exact path="/students/add" element={<PrivateRoute />}>
          <Route exact path="/students/add" element={<AddStudent />} />{" "}
        </Route>

        <Route exact path="/students/edit/:id" element={<PrivateRoute />}>
          <Route exact path="/students/edit/:id" element={<EditStudent />} />{" "}
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
