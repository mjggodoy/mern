import React, {Fragment, useState} from 'react';
import Task from './Task';

const TaskList = () => {
    const tasks = [
        {name : "Task1", status: "completed"}, 
        {name : "Task2", status: "closed"},
        {name : "Task3", status: "in progress"}
    ];

    return (
        <ul className="task-list">
            {tasks.length === 0 ? (<li className="task"><p>There are no tasks</p></li>) :
            tasks.map(task => {
                return (<Task task = {task}/>
            )})}
        </ul>
    );
}

export default TaskList;
