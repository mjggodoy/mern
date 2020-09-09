import React from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {useReducer} from 'react';
import {PROJECT_FORM, 
        GET_ALLPROJECTS, 
        ADD_PROJECT,
        VALIDATE_FORM,
        CURRENT_PROJECT,
        DELETE_PROJECT} from './../../types';
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
        project: null
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

    const selectedCurrentProjectByUser = projectId => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: projectId
        });
    }

    const deleteProject = projectId => {
        console.log(projectId);
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        });
    }

    return(
        <projectContext.Provider
            value = {{
                projectForm: state.projectForm,
                projects : state.projects,
                errorForm: state.errorForm,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                showError,
                selectedCurrentProjectByUser,
                deleteProject
            }}>
            {props.children}
        </projectContext.Provider>
    );
}
export default ProjectState;