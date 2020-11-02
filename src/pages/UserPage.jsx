import React,  { useState, useEffect } from 'react';
import { useParams } from "react-router-dom" 
// the above allows us to dynamically set the url 
import ProjectCard from "../components/ProjectCard/ProjectCard"



function UserPage() {
    const [userData, setUserData] = useState ([]);
    const { id } = useParams(); 

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/users/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data)
        });
    }, []);



    return (
       
        <div className="single-project">
             <h1>this is the user page</h1>
            <div className="single-project-box">
                <h2>{userData.username}</h2>
            </div>
            
            <div className="single-project-box">
                <h3>First name: {userData.first_name}</h3>
                <h3>Last name: {userData.last_name}</h3>
                <h3>Email: {userData.email}</h3>
                <h3>Country: {userData.country}</h3>
                
           
            </div>
        </div>

    );
}

export default UserPage;


