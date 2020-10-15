import React from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import {useReducer} from 'react';
import {v4 as uuid} from 'uuid';
import {
    TASK_PER_PROJECT,
    ADD_NEW_TASK,
    VALIDATE_TASK_FORM,
    DELETE_TASK,
    STATUS_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAN_SELECTED_TASK
} from './../../types';

const TaskState =  props => {
    const tasks = [
        {name : "Task1", id: "1", status: "Completed", projectId: "1"}, 
        {name : "Task2", id: "2", status: "Closed", projectId: "3"},
        {name : "Task3", id: "3", status: "In progress", projectId: "4"},
        {name : "Task1", id: "4", status: "Completed", projectId: "5"}, 
        {name : "Task2", id: "5", status: "Closed", projectId: "3"},
        {name : "Task1", id: "6", status: "Completed", projectId: "5"}, 
        {name : "Task2", id: "7", status: "Closed", projectId: "3"},
        {name : "Task1", id: "8", status: "Completed", projectId: "1"}, 
        {name : "Task2", id: "9", status: "Closed", projectId: "4"},
        {name : "Task1", id: "10", status: "In progress", projectId: "5"}, 
        {name : "Task2", id: "11", status: "Closed", projectId: "3"},
        {name : "Task30", id: "12", status: "Completed", projectId: "2"}, 
    ];

    const initialState = {
        tasks: tasks,
        tasksByProject: null,
        errorTaskForm: false,
        selectedTask: null
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getTasksByProjectId = projectId => {
        dispatch({
            type: TASK_PER_PROJECT,
            payload: projectId
        });
    }

    const addNewTask = task => {
        task.id = uuid();
        dispatch({
            type: ADD_NEW_TASK,
            payload: task
        });
    }

    const validateTaskForm = () => {
        dispatch({
            type: VALIDATE_TASK_FORM,
        });
    }

    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        });
    }

    const changeStatusTask = task => {
        dispatch({
            type: STATUS_TASK,
            payload: task
        });
    }

    const saveCurrentSelectedTask = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        });
    }

    const updateOrModifyTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        });
    }

    const cleanSelectedTask = task => {
        dispatch({
            type: CLEAN_SELECTED_TASK,
            payload: task
        });
    }

    return(
        <TaskContext.Provider
            value = {{
                tasks : state.tasks,
                errorTaskForm: state.errorTaskForm,
                tasksByProject: state.tasksByProject,
                selectedTask: state.selectedTask,
                getTasksByProjectId,
                addNewTask,
                validateTaskForm,
                deleteTask,
                changeStatusTask,
                saveCurrentSelectedTask,
                updateOrModifyTask,
                cleanSelectedTask
            }}>
            {props.children}
        </TaskContext.Provider>
    )
}
export default TaskState;
