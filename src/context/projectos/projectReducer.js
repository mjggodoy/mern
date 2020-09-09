import {PROJECT_FORM, 
        GET_ALLPROJECTS, 
        ADD_PROJECT, 
        VALIDATE_FORM,
        CURRENT_PROJECT,
        DELETE_PROJECT} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case PROJECT_FORM:
            return {
                ...state, 
                projectForm: true
            }
        case GET_ALLPROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                projectForm: false,
                errorForm: false
            }
        case VALIDATE_FORM:
            return {
                ...state,
                errorForm: true
            }
        case CURRENT_PROJECT:
            return {
                ...state,
                project: state.projects.filter(project =>
                project.id === action.payload)
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => 
                project.id !== action.payload),
                project: null
            }
        default: return state;
    }
}