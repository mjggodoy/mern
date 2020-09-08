import React, {Fragment, useContext} from 'react';
import Task from './Task';
import projectContext from './../../context/projectos/projectContext';

const TaskList = () => {
    const projectsContext = useContext(projectContext);
    const {project} = projectsContext;
    const tasks = [
        {name : "Task1", id: "1", status: "completed"}, 
        {name : "Task2", id: "2", status: "closed"},
        {name : "Task3", id: "3", status: "in progress"}
    ];

    if (project === null) {
        return <h2>Select a project</h2>;
    }

    const [currentProject] = project;
    return (
        <Fragment>
            <h1>{currentProject.projectName}</h1>
            <ul className="task-list">
                {tasks.length === 0 ? (<li className="task"><p>There are no tasks</p></li>) :
                tasks.map(task => {
                    return (<Task task = {task} key={task.id}/>
                )})}
                 
            </ul>
            <button type="button" className="btn btn-delete">Delete project &times;</button> 
        </Fragment>
    );
}

export default TaskList;
