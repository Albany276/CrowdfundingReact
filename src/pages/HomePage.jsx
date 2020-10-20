import React from 'react';
import { allProjects} from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard"



function HomePage() {
    return (
    <div id="project-list">
        {allProjects.map((projectData, key) =>{
            return <ProjectCard key={key} projectData={projectData} />

            // react likes to have an individual div per item, that is why we are adding div key={key}, however if we wanted to add css to it, it is better to add a class to that div
        })}
    

    </div>
    
    
    );
}


export default HomePage;