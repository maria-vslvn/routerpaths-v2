import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const headerStyle = {
  padding: '0 15px',
  borderBottom: '2px solid #ccc',
  backgroundColor: '#eee',
  display:'flex'
};

export const linkStyle = {
  padding: '10px 20px',
  textDecoration: 'none',
  color: '#444',
  fontSize: '18px',
  display: 'block',
};

const App =() => {
  return (
    <Router>
    <div>
      <div style={headerStyle}>
        <Link style={linkStyle} to="/innerApp">InnerApp</Link>
      </div>
      <div>
        <ProtectedRoute path="/innerApp" component={InnerApp} />
        <Route path="/login" component={Login} />
      </div>
    </div>
    </Router>
  );
};

const InnerApp = ({match}) => {
  return (
    <div>
      <h2>InnerApp</h2>
      <div>
        <Link style={linkStyle} to={`${match.url}/art1`}>Article 1</Link>
        <Link style={linkStyle} to={`${match.url}/art2`}>Article 2</Link>
        <Link style={linkStyle} to={`${match.url}/art3`}>Article 3</Link>
      </div>

      <Route path={`${match.path}/:id`} component={Article} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <button onClick={toggleLogin}>Log in/out</button>
    </div>
  );
};

const toggleLogin = () => {
  if(window.isLoggedin){
    window.isLoggedin = false;
    alert('Not logged in')
  } else{
    window.isLoggedin = true;
    alert('Logged in')
  }
};

const ProtectedRoute = ({path, component, exact}) =>{
  if(window.isLoggedin){
    return <Route exact={exact} path={path} component={component} />
  } else
  {
    return <Route exact={exact} redirect="/login" component={Login} />
  }
};



const Article = ({ match }) => {
  return (
    <div>
      <h3>{match.params.id}</h3>
    </div>
  );
};

export default App;