import React from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {useReducer} from 'react';
import {PROJECT_FORM} from './../../types';

const ProjectState =  props => {
    const initialState = {
        projectForm: false
    }

    const [state, dispatch] = useReducer(projectReducer, initialState);

    const showForm = () => {
        dispatch({type: PROJECT_FORM});
    }

    return(
        <projectContext.Provider
            value = {{
                projectForm: state.projectForm,
                showForm
            }}>
            {props.children}
        </projectContext.Provider>
    );
}
export default ProjectState;