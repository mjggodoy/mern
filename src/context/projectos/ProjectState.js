import React from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {useReducer} from 'react';
import {PROJECT_FORM, GET_ALLPROJECTS, ADD_PROJECT, VALIDATE_FORM} from './../../types';
import {v4 as uuid} from 'uuid';

const ProjectState =  props => {
    const projects = [
        {projectName : "Intranet", id : "1"}, 
        {projectName : "Project Maria", id : "3"},
        {projectName : "Incasso", id : "4"},
        {projectName: "Test project", id: "5"}
    ];

    const initialState = {
        projects : [],
        projectForm: false,
        errorForm: false,
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

    const addProject = project => {
        project.id = uuid();
        dispatch({
            type: ADD_PROJECT,
            payload: project
        });
    }

    const showError = () => {
        dispatch({
            type: VALIDATE_FORM,
        });
    }

    return(
        <projectContext.Provider
            value = {{
                projectForm: state.projectForm,
                projects : state.projects,
                errorForm: state.errorForm,
                showForm,
                getProjects,
                addProject,
                showError
            }}>
            {props.children}
        </projectContext.Provider>
    );
}
export default ProjectState;