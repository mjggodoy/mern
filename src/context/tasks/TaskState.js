import React from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import {useReducer} from 'react';

const TaskState =  props => {
    const tasks = [
        {name : "Task1", id: "1", status: "completed"}, 
        {name : "Task2", id: "2", status: "closed"},
        {name : "Task3", id: "3", status: "in progress"}
    ];

    const initialState = {
        tasks: []
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);
    
    return(
        <TaskContext.Provider>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;
