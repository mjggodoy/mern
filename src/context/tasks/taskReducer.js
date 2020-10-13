import {
    TASK_PER_PROJECT,
    ADD_NEW_TASK,
    VALIDATE_TASK_FORM,
    DELETE_TASK,
    STATUS_TASK,
    CURRENT_TASK,
    UPDATE_TASK
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case TASK_PER_PROJECT:
            return {
                ...state,
                tasksByProject: state.tasks.filter(
                    task => task.projectId === action.payload
            )}
        case ADD_NEW_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
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
                tasks: state.tasks.filter(task => 
                task.id !== action.payload)
            }
        case STATUS_TASK:
            return {
                ...state,
                tasksByProject: state.tasksByProject.map(task =>
                    task.id === action.payload.id ? action.payload : task)
            }
        case CURRENT_TASK:
            return {
                ...state,
                selectedTask: action.payload
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task)
            }
        default: 
            return state;
    }
}