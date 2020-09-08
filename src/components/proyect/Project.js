import React, {useContext} from 'react';
import projectContext from './../../context/projectos/projectContext';

const Project = ({project}) => {
    const projectsContext = useContext(projectContext);
    const {selectedCurrentProjectByUser} = projectsContext;
    
    const onClickselectedProject = () => {
        selectedCurrentProjectByUser(project.id);
    }

    return (
        <button onClick={onClickselectedProject} type="button" className="btn btn-blank">{project.projectName}</button>
    );
}

export default Project;