import React, {Fragment, useContext, useEffect} from 'react';
import Task from './Task';
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/TaskContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import AlertContext from './../../context/alerts/AlertContext';

const TaskList = () => {
    const {alert, showAlert} = useContext(AlertContext);
    const projectsContext = useContext(ProjectContext);
    const {project, errorProject, deleteProject, alertAuth} = projectsContext;

    useEffect(() => {
        if (errorProject) {
            showAlert(alertAuth.message, alertAuth.category, alert);
        }
    }, [alertAuth.message, errorProject]);

    const taskContext = useContext(TaskContext);
    const {tasksByProject} = taskContext;
    if (project === null) {
        return <h2>Select a project</h2>;
    }

    const [currentProject] = project;

    const onClickDeleteProject = () => {
        deleteProject(currentProject._id);
    }

    return (
        <Fragment>
            <h1>{currentProject.projectName}</h1>
            {alert ? (<div className={`alert ${alert.category}`}>{alert.message}</div>) : null}
            <ul className="task-list">
                {tasksByProject.length === 0 ? (<li className="task"><p>There are no tasks</p></li>) :
                <TransitionGroup>
                {tasksByProject.map(task => (
                    <CSSTransition
                        key={task.id}
                        timeout={100}
                        className="task"
                    >
                        <Task task = {task} key={task.id}/>
                    </CSSTransition>
                ))}
                </TransitionGroup>
                }
            </ul>
            <button type="button" onClick={onClickDeleteProject} className="btn btn-delete">Delete project &times;</button> 
        </Fragment>
    );
}
export default TaskList;
