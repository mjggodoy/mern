import React, {useContext} from 'react';
import TaskContext from '../../context/tasks/TaskContext';
import ProjectContext from '../../context/projects/ProjectContext';

const Task = ({task}) => {
    const {deleteTask, getTasksByProjectId, changeStatusTask, saveCurrentSelectedTask} = useContext(TaskContext);
    const {project} = useContext(ProjectContext);
    const [currentProject] = project;
    
    const onClickDeleteTask = () => {
        deleteTask(task.id);
        getTasksByProjectId(currentProject.id);
    }

    const onClickChangeStatusTask = task => {
        if (task.status === 'In progress') {
            task.status = 'Completed';
        } else if (task.status === 'Completed') {
            task.status = 'Closed';
        }
        changeStatusTask(task);
        getTasksByProjectId(currentProject.id);
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
                <button type="button" className="btn btn-secondary" onClick={onClickDeleteTask}>Delete Task &times;</button>
            </div>
        </li>
    );
}
export default Task;
