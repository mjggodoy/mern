import React from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {useReducer} from 'react';

const ProjectState =  props => {
    const initialState = {
        projectForm: true
    }

    const [state, dispatch] = useReducer(projectReducer, initialState);

    return(
        <projectContext.Provider
            value = {{
                projectForm: state.projectForm
            }}>
            {props.children}
        </projectContext.Provider>
    );
}
export default ProjectState;