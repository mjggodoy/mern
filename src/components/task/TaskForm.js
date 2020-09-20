import React, {Fragment, useState, useContext} from 'react';
import ProjectContext from '../../context/projectos/ProjectContext';
import TaskContext from '../../context/tasks/TaskContext';

const TaskForm = () => {
    const projectsContext = useContext(ProjectContext);
    const {project} = projectsContext;

    const taskContext = useContext(TaskContext);
    const {addNewTask} = taskContext;
    
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
        newTask.projectId = currentProject.id;
        newTask.status = "in progress";
        addNewTask(newTask);
        saveNewTask(newTask);
    }

    return (
        <Fragment>
            <div className="form">
                <form onSubmit={onSubmitTaskForm}>
                    <div className="container-input">
                        <input className="input-text" type="text-input" 
                            name="name"
                            placeholder="Add task name"
                            value = {name}
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