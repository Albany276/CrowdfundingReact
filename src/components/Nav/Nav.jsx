import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";
import "../LoginForm/LoginForm"

function Nav(){

    return (
        <div>

            
            <nav>
                <Link className="a" to="/">Home</Link>
                {/* the to props sets the url */}
                <Link className="a" to="/projects">Projects</Link>
                <Link className="a" to="/login">Login</Link>
                <Link className="a" to="/users">User Profile</Link>
                <Link className="a" to="/createproject">Create Project</Link>

            </nav>
            {/* {aux} */}
            
        </div>
        
    );
}

export default Nav;