import React from 'react'
import "./Style/styles.css"

import { Outlet, NavLink } from "react-router-dom";


// import './App.css';


export default function App(){
 

 

  // Passing configuration object to axios
 
  
  
  return(
    <div className="App">
    <nav style={{ backgroundColor: "#1B1A17", padding: "15px" }}>
      <ul className="ulStyle">
        <li>
          {""}
          <NavLink
            to="/"
            className="link-light"
            style={{
              padding: "10px",
              textDecoration: "none",
              color: "#A0BCC2"
            }}
          >
            Home
          </NavLink>
          {""}
        </li>
        <li>
          {""}
          <NavLink
            to="/NewMPX"
            className="link-light"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#A0BCC2",
                    background: "#E8F9FD",
                    textDecoration: "none"
                  }
                : {
                    color: "#A0BCC2",
                    padding: "10px",
                    textDecoration: "none"
                  }
            }
          >
            New MPX
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink
            to="/MyPassage"
            className="link-light"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#A0BCC2",
                    background: "#E8F9FD",
                    textDecoration: "none"
                  }
                : {
                    color: "#A0BCC2",
                    padding: "10px",
                    textDecoration: "none"
                  }
            }
          >
            My Passage 
          </NavLink>{" "}
        </li>
        <li>
          {" "}
         
        </li>
        <li>
          {" "}
          
        </li>
        <li style={{ marginLeft: "60px" }}>
          <NavLink to="Login">
            <button className="loginbtn">Login</button>
          </NavLink>
        </li>

        <li>
          <NavLink to="Sign-up">
            <button className="signUpbtn">Sign-Up</button>
          </NavLink>
        </li>
      </ul>
    </nav>
    
  <div className="footer">
    <p>FullAway Pty Ltd</p>
  </div>

    <Outlet/>
    
      
  </div>
  
);
}
    

