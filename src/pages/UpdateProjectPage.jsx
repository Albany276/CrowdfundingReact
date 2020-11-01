import React, { useState, useEffect } from 'react';
import UpdateProjectForm from "../components/UpdateProjectForm/UpdateProjectForm"
import { useParams } from "react-router-dom" ;

function UpdateProjectPage() {

    // return(
    //     <h1>TEST</h1>
    // )

    const { id } = useParams();

    return (
    <h1>{projectData.title}</h1>
    )

}


//     return <UpdateProjectForm/>


export default UpdateProjectPage;