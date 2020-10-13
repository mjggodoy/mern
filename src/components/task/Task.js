import React, {useContext} from 'react';
import TaskContext from '../../context/tasks/TaskContext';
import ProjectContext from '../../context/projectos/ProjectContext';

const Task = ({task}) => {
    const taskContext = useContext(TaskContext);
    const {deleteTask, getTasksByProjectId, changeStatusTask, saveCurrentSelectedTask} = taskContext;
    
    const projectsContext = useContext(ProjectContext);
    const {project} = projectsContext;
    const [currentProject] = project;
    
    const onClickDeleteTask = () => {
        deleteTask(task.id);
        getTasksByProjectId(currentProject.id);
    }
    
    const onClickChangeStatusTask = task => {
        if (task.status === 'in progress') {
            task.status = 'completed';
        } else if (task.status === 'completed') {
            task.status = 'closed';
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
                {task.status !== "closed" 
                    ? <button className="complete">{task.status}</button> 
                    : <button className="incomplete">{task.status}</button>
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
