import React, {useContext, useEffect} from 'react';
import Project from './Project';
import projectContext from './../../context/projectos/projectContext';

const ListProjects = () => {

    const projectsContext = useContext(projectContext);
    const {projects, getProjects} = projectsContext;
    console.log(projects);
    
    useEffect(() => {
        getProjects();
    }, []);

    if(projects.length === 0) {
        return null;
    }
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
