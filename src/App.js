import React from "react";
import './assets/css/App.css'
import {ProtectedRoute} from "./components/ProtectedRoute";
import {InnerApp} from "./components/InnerApp";
import {Login} from "./components/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App =() => {
  return (
    <Router>
    <div>
      <div className="headerStyle">
        <Link className="linkStyle" to="/innerApp">InnerApp</Link>
      </div>
      <div>
        <ProtectedRoute path="/innerApp" component={InnerApp} />
        <Route path="/login" component={Login} />
      </div>
    </div>
    </Router>
  );
};


export default App;