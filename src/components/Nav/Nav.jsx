import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

function Nav(){
    return (
        <nav>
            <Link className="a" to="/">Home</Link>
            {/* the to props sets the url */}
            <Link className="a" to="/projects">Projects</Link>
            <Link className="a" to="/users">User Profile</Link>

        </nav>
    );
}

export default Nav;