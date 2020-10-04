import React, {useContext} from 'react';
import TaskContext from '../../context/tasks/TaskContext';

const Task = ({task}) => {

    const taskContext = useContext(TaskContext);
    const {deleteTask} = taskContext;
    
    const onClickDeleteTask = () => {
        deleteTask(task.id);
    }

    return (
        <li className="task shadow">
            <p>{task.name}</p>
            <div className="status">
                {task.status !== "closed" 
                    ? <button className="complete">{task.status}</button> 
                    : <button className="incomplete">{task.status}</button>
                }  
            </div>
            <div className="actions">
                <button type="button" className="btn btn-primary">Edit</button>
                <button type="button" className="btn btn-secondary" onClick={onClickDeleteTask}>Delete Task &times;</button>
            </div>
        </li>
    );
}
export default Task;
