import React, { useState, useEffect } from 'react';
import UpdateProjectForm from "../components/UpdateProjectForm/UpdateProjectForm"
import { useParams } from "react-router-dom" ;

function UpdateProjectPage() {

    const { id } = useParams();


    return(
        <div>
        {/* <h1>{id}</h1> */}
        <UpdateProjectForm id={id}/>
        </div>

    )


    // return (
    // <h1>{projectData.title}</h1>
    // 01/11 - project data not working
    // )

}


//     return <UpdateProjectForm/>


export default UpdateProjectPage;