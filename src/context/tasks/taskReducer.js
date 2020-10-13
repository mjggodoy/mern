import {
    TASK_PER_PROJECT,
    ADD_NEW_TASK,
    VALIDATE_TASK_FORM,
    DELETE_TASK,
    STATUS_TASK
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
            console.log(state.tasksByProject);
            return {
                ...state,
                tasksByProject: state.tasksByProject.map(task =>
                    task.id === action.payload.id ? action.payload : task
                )
            }
            
        default: 
            return state;
    }
}