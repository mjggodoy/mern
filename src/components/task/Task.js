import React, {Fragment, useState} from 'react';

const Task = ({task}) => {
    return (
        <li className="task shadow">
            <p>{task.name}</p>
            <div className="status">
                {task.status !== "closed" 
                    ? <button className="complete">{task.status}</button> 
                    : <button className="incomplete">{task.status}</button>}
            </div>
        </li>
    );
}

export default Task;
