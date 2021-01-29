import React from 'react';
import projectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import {useReducer} from 'react';
import {PROJECT_FORM, 
        GET_ALLPROJECTS, 
        ADD_PROJECT,
        VALIDATE_FORM,
        CURRENT_PROJECT,
        DELETE_PROJECT} from './../../types';
import {v4 as uuid} from 'uuid';
import clientAxios from '../../config/axiosClient';

const ProjectState =  props => {
    const projects = [
        {projectName : "Intranet", _id : "1"}, 
        {projectName : "Project Maria2", _id : "2"},
        {projectName : "Project Maria", _id : "3"},
        {projectName : "Incasso", _id : "4"},
        {projectName: "Test project", _id: "5"}
    ];

    const initialState = {
        projects : [],
        projectForm: false,
        errorForm: false,
        project: null
    }

    const [state, dispatch] = useReducer(ProjectReducer, initialState);

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

    const addProject = async project => {
        try {
            const response = await clientAxios.post('api/projects', project);
            console.log(response.data);
            dispatch({
                type: ADD_PROJECT,
                payload: response.data
            });
        } catch(error) {
            console.log(error);
        }
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
