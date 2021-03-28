import React, {useContext, useEffect} from 'react';
import TaskContext from '../../context/tasks/TaskContext';
import ProjectContext from '../../context/projects/ProjectContext';

const Task = ({task}) => {
    const {project} = useContext(ProjectContext);
    const [currentProject] = project;
    const {deleteTask, getTasksByProjectId, saveCurrentSelectedTask, updateOrModifyTask} = useContext(TaskContext);

    const onClickDeleteTask = id => {
        deleteTask(id, currentProject._id);
        getTasksByProjectId(currentProject._id);
    }

    const onClickChangeStatusTask = task => {
        if (task.status === 'In progress') {
            task.status = 'Completed';
        } else if (task.status === 'Completed') {
            task.status = 'Closed';
        }
        updateOrModifyTask(task);
    }

    const onClickSelectedTask = task => {
        saveCurrentSelectedTask(task);
    }

    return (
        <li className="task shadow">
            <p>{task.name}</p>
            <div className="status" onClick={() => onClickChangeStatusTask(task)}>
                {task.status === "Completed" 
                    ? <button className="complete">{task.status}</button> 
                    : task.status === "Closed" 
                    ? <button className="incomplete">{task.status}</button>
                    : <button className="inprogress">{task.status}</button> 
                }  
            </div>
            <div className="actions">
                <button type="button" className="btn btn-primary" onClick={() => onClickSelectedTask(task)}>Edit</button>
                <button type="button" className="btn btn-delete" onClick={() => onClickDeleteTask(task._id)}>Delete Task &times;</button>
            </div>
        </li>
    );
}

export default Task;
