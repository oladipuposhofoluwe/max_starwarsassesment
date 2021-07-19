import React from "react";
import "./app.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/dashboard";

// import { Routes } from './Routes';
function App() {
  return (
    <Router>
      <Switch>
            <Route to='/login' exact component={Login} />
            <Route to='/dashboard' exact component={Dashboard}/>
      </Switch>
      </Router>
     
  );
}

export default App;
