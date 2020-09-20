import React from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import {useReducer} from 'react';
import {
    TASK_PER_PROJECT,
    ADD_NEW_TASK
} from './../../types';

const TaskState =  props => {
    const tasks = [
        {name : "Task1", id: "1", status: "completed", projectId: "1"}, 
        {name : "Task2", id: "2", status: "closed", projectId: "3"},
        {name : "Task3", id: "3", status: "in progress", projectId: "4"},
        {name : "Task1", id: "4", status: "completed", projectId: "5"}, 
        {name : "Task2", id: "5", status: "closed", projectId: "3"},
        {name : "Task1", id: "6", status: "completed", projectId: "5"}, 
        {name : "Task2", id: "7", status: "closed", projectId: "3"},
        {name : "Task1", id: "8", status: "completed", projectId: "1"}, 
        {name : "Task2", id: "9", status: "closed", projectId: "4"},
        {name : "Task1", id: "10", status: "completed", projectId: "5"}, 
        {name : "Task2", id: "11", status: "closed", projectId: "3"},
    ];

    const initialState = {
        tasks: tasks,
        tasksByProject: null
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getTasksByProjectId = projectId => {
        dispatch({
            type: TASK_PER_PROJECT,
            payload: projectId
        });
    }

    const addNewTask = task => {
        dispatch({
            type: ADD_NEW_TASK,
            payload: task
        });
    }
    
    return(
        <TaskContext.Provider
            value = {{
                tasks : state.tasks,
                tasksByProject: state.tasksByProject,
                getTasksByProjectId,
                addNewTask
            }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;
