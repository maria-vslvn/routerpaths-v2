import * as React from 'react'

export const Login = () => {
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