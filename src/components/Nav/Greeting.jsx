import React from 'react';
import { Link } from 'react-router-dom';




function Greeting() {
    const token =  window.sessionStorage.getItem("token");
    
    if(token) {
      
        return( 
            <div>
                <Link className="a" to="/users">User Profile</Link>
                <Link className="a" to="/logout">Logout</Link>
            </div>
        )
    }

    if(!token){  
        return <Link className="a" to="/login">Login</Link>
    }
}

export default Greeting;