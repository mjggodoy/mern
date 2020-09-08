import {PROJECT_FORM, GET_ALLPROJECTS, ADD_PROJECT, VALIDATE_FORM} from '../../types';

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

        default: return state;
    }
}