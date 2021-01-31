import {PROJECT_FORM, 
        GET_ALLPROJECTS, 
        ADD_PROJECT, 
        VALIDATE_FORM,
        CURRENT_PROJECT,
        DELETE_PROJECT, PROJECT_ERROR} from '../../types';

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
                projects: [action.payload, ...state.projects],
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
                project._id === action.payload)
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => 
                project._id !== action.payload),
                project: null
            }
        case PROJECT_ERROR:
            let alertAuth = {};
            if (action.payload) {
                alertAuth = {
                    message: action.payload.message,
                    category: action.payload.category
                }
            } else {
                alertAuth = {
                    message: action.payload
                }
            }
            return {
                ...state,
                errorProject: true,
                alertAuth
            }
        default: 
            return state;
    }
}
