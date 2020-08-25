import React, {Fragment, useState} from 'react';

const Task = ({task}) => {
    return (
        <button type="button" className="btn btn-blank">{task.name}</button>
    );
}

export default Task;