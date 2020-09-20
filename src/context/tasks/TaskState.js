import React from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
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

    const [state, dispatch] = useReducer(taskReducer, initialState);
    return(
        <taskContext.Provider>
            {props.children}
        </taskContext.Provider>
    )
}

export default TaskState;
