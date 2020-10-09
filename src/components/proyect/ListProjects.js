import React, {useContext, useEffect} from 'react';
import Project from './Project';
import ProjectContext from '../../context/projectos/ProjectContext';

const ListProjects = () => {
    const projectsContext = useContext(ProjectContext);
    const {projects, getProjects} = projectsContext;
    
    useEffect(() => {
        getProjects();
    }, []);

    if(projects.length === 0) {
        return <h3 className="no-projects">There are no projects, start creating one project!</h3>;
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
