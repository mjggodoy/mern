import React, {Fragment, useState} from 'react';

const TaskForm = () => {
    const [newTask, saveNewTask] = useState({
        taskName : ""
    });

    const onChangeTask = e => {
        saveNewTask({
            ...newTask, 
            [e.target.name] : e.target.value
        });
    }

    const onSubmitTaskForm = e => {
        e.preventDefault();
    }

    const {taskName} = newTask;
    return (
        <Fragment>
            <div className="form">
                <form onSubmit={onSubmitTaskForm}>
                    <div className="container-input">
                        <input className="input-text" type="text-input" 
                            name="taskName"
                            placeholder="Add task name"
                            value = {taskName}
                            onChange={onChangeTask}>
                        </input>
                    </div>
                    <div className="container-input">
                        <input type="submit" className="btn btn-primary btn-block" value="Add new task!"></input>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default TaskForm;