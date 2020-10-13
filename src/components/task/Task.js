import React, {useContext} from 'react';
import TaskContext from '../../context/tasks/TaskContext';

const Task = ({task}) => {
    const taskContext = useContext(TaskContext);
    const {deleteTask, getTasksByProjectId, changeStatusTask} = taskContext;

    const onClickDeleteTask = () => {
        deleteTask(task.id);
        getTasksByProjectId(task.projectId);
    }

    const onClickChangeStatusTask = task => {
        if (task.status === 'in progress') {
            task.status = 'completed';
        } else if (task.status === 'completed') {
            task.status = 'closed';
        }
        changeStatusTask(task);
    }

    return (
        <li className="task shadow">
            <p>{task.name}</p>
            <div className="status" onClick={() => onClickChangeStatusTask(task)}>
                {task.status !== "closed" 
                    ? <button className="complete">{task.status}</button> 
                    : <button className="incomplete">{task.status}</button>
                }  
            </div>
            <div className="actions">
                <button type="button" className="btn btn-primary" onClick={() => onClickChangeStatusTask(task)}>Edit</button>
                <button type="button" className="btn btn-secondary" onClick={onClickDeleteTask}>Delete Task &times;</button>
            </div>
        </li>
    );
}
export default Task;
