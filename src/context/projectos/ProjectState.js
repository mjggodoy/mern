import React from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {useReducer} from 'react';
import {PROJECT_FORM, GET_ALLPROJECTS} from './../../types';

const ProjectState =  props => {
    const projects = [
        {name : "Intranet", id : "1"}, 
        {name : "Project Maria", id : "3"},
        {name : "Incasso", id : "4"},
        {name: "Test project", id: "5"}
    ]
    const initialState = {
        projects : [],
        projectForm: false
    }

    const [state, dispatch] = useReducer(projectReducer, initialState);

    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        });
    }

    const getProjects = () => {
        dispatch({
            type: GET_ALLPROJECTS,
            payload: projects
        });
    }

    return(
        <projectContext.Provider
            value = {{
                projectForm: state.projectForm,
                projects : state.projects,
                showForm,
                getProjects
            }}>
            {props.children}
        </projectContext.Provider>
    );
}
export default ProjectState;