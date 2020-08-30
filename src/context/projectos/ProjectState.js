import React from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {useReducer} from 'react';

const ProjectState =  props => {
    const initialState = {
        newProject: false
    }

    const [state, dispatch] = useReducer(projectReducer, initialState);

    return(
        <projectContext.Provider
            value = {{
                newProject: state.newProject
            }}>
            {props.children}
        </projectContext.Provider>
    );
}
export default ProjectState;