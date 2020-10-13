import React, {Fragment, useState, useContext, useEffect} from 'react';
import ProjectContext from '../../context/projectos/ProjectContext';
import TaskContext from '../../context/tasks/TaskContext';
import {v4 as uuid} from 'uuid';

const TaskForm = () => {
    const {project} = useContext(ProjectContext);
    const {selectedTask, addNewTask, errorTaskForm, validateTaskForm, getTasksByProjectId, updateOrModifyTask} = useContext(TaskContext);
    
    useEffect(() => {
        if (selectedTask !== null) {
            saveNewTask(selectedTask);
        } else {
            saveNewTask({
                name : "", 
                id: "",
                projectId: ""
            })}
    }, [selectedTask]);

    const [newTask, saveNewTask] = useState({
        name : "", 
        id: "",
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
            newTask.projectId = currentProject.id;
            newTask.status = "in progress";
            newTask.id = uuid();
            addNewTask(newTask);
        } else {
            updateOrModifyTask(newTask);
        }
        saveNewTask({name:''});
        getTasksByProjectId(currentProject.id); 
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