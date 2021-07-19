import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./pages/login/Login";
// import Dashboard from "./pages/dashboard/dashboard";
import {Routes} from './Routes';

function App() {
  return (
    <Router>
      <Routes />
      </Router>
     
  );
}

export default App;
