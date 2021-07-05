import React, { Fragment, useState, useContext } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';

const NewProject = () => {
    const projectsContext = useContext(ProjectContext);
    const { projectForm, showForm, addProject, errorForm, showError } = projectsContext;
    const [newProject, saveNewProject] = useState({
        projectName : "",
        id : ""
    });

    const onChangeProject = e => {
        saveNewProject({
            ...newProject, 
            [e.target.name] : e.target.value
        });
    }

    const { projectName } = newProject;

    const onSubmitProject = e => {
        e.preventDefault();
        if (projectName.length === 0) {
            showError();
            return;
        } 
        addProject(newProject);
        saveNewProject({projectName: ""});
    }

    const onClickForm = () => {
        showForm();
    }

    return(
        <Fragment>
            <button type="button" className="btn btn-block btn-primary" onClick={onClickForm}>New project!</button>
            {projectForm 
                ? <form className="form-new-project"
                    onSubmit = {onSubmitProject}>
                    <input type="input-text" 
                            className="input-text"
                            value={projectName}
                            name="projectName"
                            placeholder="Add project name"
                            onChange={onChangeProject}>
                    </input>
                    <input type="submit" className="btn btn-primary btn-block" value="Add new project!"></input>
                    </form>
                : null
            }
            {errorForm ? <p className="message error">The project name is required</p> : null}
        </Fragment>
    );
}

export default NewProject;
