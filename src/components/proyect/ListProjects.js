import React, {Fragment, useState} from 'react';
import Project from './Project';

const ListProjects = () => {
    const projects = [
        {name : "Intranet"}, 
        {name : "Project Maria"},
        {name : "Incasso"}
    ];

    return (
        <ul className="project-list">
            {projects.map(project => {
                return (<Project
                    project = {project}
                />
            )})}
        </ul>
    );
}

export default ListProjects;
