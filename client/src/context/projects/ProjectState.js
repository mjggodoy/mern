import React from 'react';
import projectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import {useReducer} from 'react';
import {PROJECT_FORM, 
        GET_ALLPROJECTS, 
        ADD_PROJECT,
        VALIDATE_FORM,
        CURRENT_PROJECT,
        DELETE_PROJECT,
        PROJECT_ERROR} from './../../types';
import clientAxios from '../../config/axiosClient';

const ProjectState =  props => {
    const initialState = {
        projects : [],
        projectForm: false,
        errorForm: false,
        project: null,
        alertAuth : {},
        errorProject: false
    }

    const [state, dispatch] = useReducer(ProjectReducer, initialState);

    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        });
    }

    const getProjects = async () => {
        try {
            const response = await clientAxios.get('api/projects');
            dispatch({
                type: GET_ALLPROJECTS,
                payload: response.data.projectsFromUser
            });
        } catch(error) {
            const alertAuth = {
                message : error.response.data,
                category: 'alert-error'
            };
            dispatch({
                type: PROJECT_ERROR,
                payload: alertAuth
            });
        }
    }

    const addProject = async project => {
        try {
            const response = await clientAxios.post('api/projects', project);
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

    const deleteProject = async projectId => {
        try {
            await clientAxios.delete(`api/projects/${projectId}`);
            dispatch({
                type: DELETE_PROJECT,
                payload: projectId
            });
        } catch(error) {
            const alertAuth = {
                message : error.response.data.msg,
                category: 'alert-error'
            };
            dispatch({
                type: PROJECT_ERROR,
                payload: alertAuth
            });
        }
    }

    return(
        <projectContext.Provider
            value = {{
                projectForm: state.projectForm,
                projects : state.projects,
                errorForm: state.errorForm,
                project: state.project,
                errorProject: state.errorProject,
                alertAuth : state.alertAuth,
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
