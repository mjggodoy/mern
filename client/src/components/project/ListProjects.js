import React, {useContext, useEffect} from 'react';
import Project from './Project';
import ProjectContext from '../../context/projects/ProjectContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListProjects = () => {
    const projectsContext = useContext(ProjectContext);
    const {projects, getProjects} = projectsContext;

    useEffect(() => {
        getProjects();
    }, []);

    if (projects.length === 0) {
        return <h3 className="no-projects">There are no projects, start creating one project!</h3>;
    }

    return (
        <ul className="project-list">
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key = {project._id}
                        timeout={300}
                        className="project"
                    >
                        <Project
                            project = {project}   
                        />
                    </CSSTransition>   
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListProjects;
