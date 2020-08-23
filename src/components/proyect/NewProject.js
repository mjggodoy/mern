import React, {Fragment} from 'react';

const NewProject = () => {
    return(
        <Fragment>
            <button type="button" className="btn btn-block btn-primary">New project</button>
            <form className="form-new-project">
                <input type="input-text" 
                        className="input-text"
                        name="projectname"
                        placeholder="Add project name">
                </input>
                <input type="submit" className="btn btn-primary btn-block" value="Add new project!"></input>
            </form>
        </Fragment>
    );
}

export default NewProject;
