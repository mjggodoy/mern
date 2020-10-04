import {
    TASK_PER_PROJECT,
    ADD_NEW_TASK,
    VALIDATE_TASK_FORM,
    DELETE_TASK
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
                tasks: [...state.tasks, action.payload],
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
                task.id !== action.payload),
            }
        default: 
            return state;
    }
}