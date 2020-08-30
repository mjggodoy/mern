import {PROJECT_FORM, GET_ALLPROJECTS} from '../../types';

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
        default: return state;
    }
}