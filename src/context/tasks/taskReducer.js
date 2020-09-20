import {
    TASK_PER_PROJECT,
    ADD_NEW_TASK
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case TASK_PER_PROJECT:
            return {
                ...state,
                tasksByProject: state.tasks.filter(
                    task => task.projectId === action.payload
                )}
        case TASK_PER_PROJECT:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
                }
        default: return state;
    }
}