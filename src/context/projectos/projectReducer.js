import {PROJECT_FORM, GET_PROJECTS} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case PROJECT_FORM:
            return {
                ...state, 
                projectForm: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        default: return state;
    }
}