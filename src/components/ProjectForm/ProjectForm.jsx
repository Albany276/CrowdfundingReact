import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// 24/10: starting project form to create a new project

function ProjectForm(){
    const [info, setInfo] = useState({
        title: "",
        description: "",
        goal: "",
        // at the moment forcing image, is open, country, and date created fields
        // need to  add them to the form later on
        image: "https://picsum.photos/id/1003/1181/1772", 
        is_open: "1",
        country:"Colombia", 
        date_created: "2020-10-02T20:36:23.382748Z"      

    });
    const history = useHistory();

    const handleChange =(e) => {
        const { id,value } = e.target;
        setInfo((prevInfo) => ({
            ...prevInfo,
            [id]: value,
        }))
    };


    const postData = async() => {
        const token =  window.localStorage.getItem("token");

        if (!token){
            window.alert("You need to be logged in  to create a project")
            return
        }

        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/projects/`,{
            method: "post",
            // the headers pass info to the request
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(info)
            });
            return response.json();       
    }

    // the below checks that both a username and password have been entered in the front end
    // before contacting the backend
    const handleSubmit = (e) => {
        e.preventDefault();
        if (info.title && info.description && info.goal){
            postData().then((response) => {
                console.log(response)
               
                }
            );
        };
    };


    return (
        <form>
            <div>
                <label htmlFor="title">Project Title:</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter title"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Descritpion:</label>
                <input
                    type="text"
                    id="description"
                    placeholder="description"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="goal">Goal:</label>
                <input
                    type="integer"
                    id="goal"
                    placeholder="goal"
                    onChange={handleChange}
                />
            </div>

            <button type="submit" onClick={handleSubmit}>
                Create Project
            </button>
        </form>

    )
}

export default ProjectForm