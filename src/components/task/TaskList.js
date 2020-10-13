import React, {Fragment, useContext} from 'react';
import Task from './Task';
import ProjectContext from '../../context/projectos/ProjectContext';
import TaskContext from '../../context/tasks/TaskContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const TaskList = () => {
    const projectsContext = useContext(ProjectContext);
    const {project, deleteProject} = projectsContext;

    const taskContext = useContext(TaskContext);
    const {tasksByProject} = taskContext;

    if (project === null) {
        return <h2>Select a project</h2>;
    }

    const [currentProject] = project;

    const onClickDeleteProject = () => {
        deleteProject(currentProject.id);
    }

    return (
        <Fragment>
            <h1>{currentProject.projectName}</h1>
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
