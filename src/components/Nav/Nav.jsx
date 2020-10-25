import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";
import "../LoginForm/LoginForm"

function Nav(){

    return (

        <nav>
            <div className="topnav">
                <Link className="a" to="/">Home</Link>
                    {/* the to props sets the url */}
                <Link className="a" to="/projects">Projects</Link>

                <div className="topnav-right">           
                    <Link className="a" to="/login">Login</Link>
                    <Link className="a" to="/users">User Profile</Link>
                    <Link className="a" to="/createproject">Create Project</Link>
                </div> 
            </div>
        </nav>
  
        
    );
}

export default Nav;