import React, {Fragment, useState, useContext} from 'react';
import projectContext from './../../context/projectos/projectContext';

const NewProject = () => {

    const projectsContext = useContext(projectContext);
    const {projectForm, showForm, addProject} = projectsContext;

    const [newProject, saveNewProject] = useState({
        name : "",
        id : ""
    });

    const onChangeProject = e => {
        saveNewProject({
            ...newProject, 
            [e.target.name] : e.target.value
        });
    }

    const {name} = newProject;

    const onSubmitProject = e => {
        e.preventDefault();
        if (name.length === 0) {
            return;
        } 
        addProject(newProject);
    }

    return(
        <Fragment>
            <button type="button" className="btn btn-block btn-primary" onClick={showForm}>New project</button>
            {projectForm 
                ? <form className="form-new-project"
                    onSubmit = {onSubmitProject}>
                    <input type="input-text" 
                            className="input-text"
                            value = {name}
                            name="name"
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
