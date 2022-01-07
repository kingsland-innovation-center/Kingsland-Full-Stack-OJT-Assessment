import React from "react";
import {
  Login,
  Welcome,
  Register,
  Dashboard,
  AddStudent,
  Students,
} from "./views";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

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
        <Route path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<PrivateRoute />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route exact path="/students" element={<Students />} />
        <Route exact path="/students/add" element={<AddStudent />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
