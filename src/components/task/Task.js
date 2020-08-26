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
            <div className="actions">
                <button type="button" className="btn btn-primary">Edit</button>
                <button type="button" className="btn btn-secondary">Delete</button>
            </div>
        </li>
    );
}

export default Task;
