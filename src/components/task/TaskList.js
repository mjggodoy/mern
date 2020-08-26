import React, {Fragment} from 'react';
import Task from './Task';

const TaskList = () => {
    const tasks = [
        {name : "Task1", id: "1", status: "completed"}, 
        {name : "Task2", id: "2", status: "closed"},
        {name : "Task3", id: "3", status: "in progress"}
    ];

    return (
        <Fragment>
            <h2>Project Maria</h2>
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
