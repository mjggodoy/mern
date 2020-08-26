import React from 'react';
import Project from './Project';

const ListProjects = () => {
    const projects = [
        {name : "Intranet", id : "1"}, 
        {name : "Project Maria", id : "3"},
        {name : "Incasso", id : "4"}
    ];

    return (
        <ul className="project-list">
            {projects.map(project => {
                return (<Project
                    project = {project}
                    key = {project.id}
                />
            )})}
        </ul>
    );
}

export default ListProjects;
