import React from 'react';
import { oneProject } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard"

function ProjectPage() {
    return (
        <div className="single-project">
            <h2>{oneProject.title}</h2>
            <h3>Created at {oneProject.date_created}</h3>
            <h3>{`Status: ${oneProject.is_open}`}</h3> 
            {/* using ` to covert is_open from boolean to string - $ indicates that this is a variable */}
            <h3>Pledges: </h3>
            <ul>
                {oneProject.pledges.map((pledgeData, key) => {
                    return (
                        <li>
                            {pledgeData.amount}
                        </li>

                    )
                })}
            </ul>
        </div>

    );
}


export default ProjectPage;