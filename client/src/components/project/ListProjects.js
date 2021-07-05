import React, { useContext, useEffect } from 'react';
import Project from './Project';
import ProjectContext from '../../context/projects/ProjectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AlertContext from './../../context/alerts/AlertContext';

const ListProjects = () => {
    const projectsContext = useContext(ProjectContext);
    const {alertAuth, projects, getProjects} = projectsContext;
    const {alert, showAlert} = useContext(AlertContext);

    useEffect(() => {
        if (alertAuth) {
            showAlert(alertAuth.message);
        }
        getProjects();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (projects.length === 0 && alertAuth.message == null) {
        return <h3 className="no-projects">There are no projects, start creating one project!</h3>;
    }

    return (
        <ul className="project-list">
            {alert ? (<div className={`alert ${alert.category}`}>{alert.message}</div>) : null}
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
