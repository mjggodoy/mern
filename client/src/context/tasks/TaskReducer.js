import {
    TASK_PER_PROJECT,
    ADD_NEW_TASK,
    VALIDATE_TASK_FORM,
    DELETE_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAN_SELECTED_TASK
} from '../../types';

const TaskReducer = (state, action) => {
    switch(action.type) {
        case TASK_PER_PROJECT:
            return {
                ...state,
                tasksByProject: action.payload
            }
        case ADD_NEW_TASK:
            return {
                ...state,
                tasksByProject: [...state.tasksByProject, action.payload],
                errorTaskForm: false
            }
        case VALIDATE_TASK_FORM:
            return {
                ...state,
                errorTaskForm: true
            }
        case DELETE_TASK:
            return {
                ...state,
                tasksByProject: state.tasksByProject.filter(task => 
                task._id !== action.payload)
            }
        case CURRENT_TASK:
            return {
                ...state,
                selectedTask: action.payload
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasksByProject: state.tasksByProject.map(task =>
                    task._id === action.payload._id ? action.payload : task)
            }
        case CLEAN_SELECTED_TASK:
            return {
                ...state,
                selectedTask: null
            } 
        default: 
            return state;
    }
}

export default TaskReducer;
