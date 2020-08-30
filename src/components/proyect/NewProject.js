import React, {Fragment, useState, useContext} from 'react';
import projectContext from './../../context/projectos/projectContext';
const NewProject = () => {

    const projectsContext = useContext(projectContext);
    const {projectForm} = projectsContext;

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
            {projectForm 
                ? <form className="form-new-project"
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
                : null
        }
        </Fragment>
    );
}

export default NewProject;
