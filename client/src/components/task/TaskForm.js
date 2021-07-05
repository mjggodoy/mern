import React, { Fragment, useState, useContext, useEffect } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/TaskContext';

const TaskForm = () => {
    const {project} = useContext(ProjectContext);
    const {selectedTask, cleanSelectedTask, addNewTask, errorTaskForm, validateTaskForm, getTasksByProjectId, updateOrModifyTask} = useContext(TaskContext);
    
    useEffect(() => {
        if (selectedTask !== null) {
            saveNewTask(selectedTask);
        } else {
            saveNewTask({
                name : "", 
                projectId: ""
            })}
    }, [selectedTask]);

    const [newTask, saveNewTask] = useState({
        name : "", 
        projectId: ""
    });

    if (project === null) {
        return null;
    }

    const [currentProject] = project;
    const {name} = newTask;

    const onChangeTask = e => {
        saveNewTask({
            ...newTask, 
            [e.target.name] : e.target.value
        });
    }

    const onSubmitTaskForm = e => {
        e.preventDefault();
        if (newTask.name.trim() === '') {
            validateTaskForm();
            return;
        }

        if (selectedTask === null) {
            newTask.projectId = currentProject._id;
            newTask.status = "In progress";
            addNewTask(newTask);
        } else {
            updateOrModifyTask(newTask);
            cleanSelectedTask(selectedTask)
        }
        getTasksByProjectId(currentProject._id); 
        saveNewTask({name:''});
    }

    return (
        <Fragment>
            <div className="form">
                {newTask ? <form onSubmit={onSubmitTaskForm}>
                    <div className="container-input">
                        <input className="input-text" type="text-input" 
                            name="name"
                            placeholder="Add task name"
                            value = {name}
                            onChange={onChangeTask}>
                        </input>
                    </div>
                    <div className="container-input">
                        <input type="submit" className="btn btn-primary btn-block" 
                            value={selectedTask ? 'Edit a task!' : 'Add a new task!' }>
                        </input>
                    </div>
                </form> : null}
                {errorTaskForm ? <p className="message error errorTask">The task name is required</p> : null}
            </div>
        </Fragment>
    );
}

export default TaskForm;
