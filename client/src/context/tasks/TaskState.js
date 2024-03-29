import React from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import { useReducer } from 'react';
import { TASK_PER_PROJECT,
    ADD_NEW_TASK,
    VALIDATE_TASK_FORM,
    DELETE_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAN_SELECTED_TASK } from './../../types';
import clientAxios from '../../config/axiosClient';

const TaskState =  props => {
    const initialState = {
        tasksByProject: [],
        errorTaskForm: false,
        selectedTask: null
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getTasksByProjectId = async projectId => {
        try {
            const response = await clientAxios.get(`api/tasks/${projectId}`);            
            dispatch({
                type: TASK_PER_PROJECT,
                payload: response.data.taskByProjectId
            });
        } catch (error) {
            console.log(error);
        }
    }

    const addNewTask = async task => {
        try {
            const response = await clientAxios.post('api/tasks', task);
            dispatch({
                type: ADD_NEW_TASK,
                payload: response.data.task
            });
        } catch (error) {
            console.log(error);
        }
    }

    const validateTaskForm = () => {
        dispatch({
            type: VALIDATE_TASK_FORM,
        });
    }

    const deleteTask = async (id, projectId) => {
        try {
            await clientAxios.delete(`api/tasks/${id}`, {data: { "projectId" : projectId }});
            dispatch({
                type: DELETE_TASK,
                payload: id
            });
        } catch (error) {
            console.log(error);
        }
    }

    const saveCurrentSelectedTask = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        });
    }

    const updateOrModifyTask = async task => {
        try {
            const response = await clientAxios.put(`api/tasks/${task._id}`, task);
            dispatch({
                type: UPDATE_TASK,
                payload: response.data.taskById
            });
        } catch (error) {
            console.log(error);
        }
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
                errorTaskForm: state.errorTaskForm,
                tasksByProject: state.tasksByProject,
                selectedTask: state.selectedTask,
                getTasksByProjectId,
                addNewTask,
                validateTaskForm,
                deleteTask,
                saveCurrentSelectedTask,
                updateOrModifyTask,
                cleanSelectedTask
            }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;
