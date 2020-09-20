import React, {Fragment, useContext} from 'react';
import Task from './Task';
import projectContext from '../../context/projectos/ProjectContext';

const TaskList = () => {
    const projectsContext = useContext(projectContext);
    const {project, deleteProject} = projectsContext;
    const tasks = [];

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
                {tasks.length === 0 ? (<li className="task"><p>There are no tasks</p></li>) :
                tasks.map(task => {
                    return (<Task task = {task} key={task.id}/>
                )})}
                 
            </ul>
            <button type="button" onClick={onClickDeleteProject} className="btn btn-delete">Delete project &times;</button> 
        </Fragment>
    );
}

export default TaskList;
