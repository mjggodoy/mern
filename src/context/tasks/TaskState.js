import React from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import {useReducer} from 'react';

const TaskState =  props => {
    const tasks = [
        {name : "Task1", id: "1", status: "completed", projectId: 1}, 
        {name : "Task2", id: "2", status: "closed", projectId: 3},
        {name : "Task3", id: "3", status: "in progress", projectId: 4},
        {name : "Task1", id: "1", status: "completed", projectId: 5}, 
        {name : "Task2", id: "2", status: "closed", projectId: 3},
        {name : "Task1", id: "1", status: "completed", projectId: 5}, 
        {name : "Task2", id: "2", status: "closed", projectId: 3},
        {name : "Task1", id: "1", status: "completed", projectId: 1}, 
        {name : "Task2", id: "2", status: "closed", projectId: 4},
        {name : "Task1", id: "1", status: "completed", projectId: 5}, 
        {name : "Task2", id: "2", status: "closed", projectId: 3},
    ];

    const initialState = {
        tasks: tasks,
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);
    
    return(
        <TaskContext.Provider
            value = {{
                tasks : state.tasks
            }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;
