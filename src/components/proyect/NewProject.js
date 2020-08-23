import React, {Fragment, useState} from 'react';

const NewProject = () => {
    const [newProject, saveNewProject] = useState({
        projectName : ""
    });

    const onChangeProject = e => {
        saveNewProject({
            ...newProject, 
            [e.target.name] : e.target.value
        });
    }

    const onSubmitProject = e => {
        e.preventDefault();
    }

    const {projectName} = newProject;

    return(
        <Fragment>
            <button type="button" className="btn btn-block btn-primary">New project</button>
            <form className="form-new-project"
                onSubmit = {onSubmitProject}>
                <input type="input-text" 
                        className="input-text"
                        value = {projectName}
                        name="projectName"
                        placeholder="Add project name"
                        onChange={onChangeProject}>
                </input>
                <input type="submit" className="btn btn-primary btn-block" value="Add new project!"></input>
            </form>
        </Fragment>
    );
}

export default NewProject;
