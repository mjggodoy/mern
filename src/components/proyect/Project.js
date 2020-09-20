import React, {useContext} from 'react';
import ProjectContext from '../../context/projectos/ProjectContext';

const Project = ({project}) => {
    const projectsContext = useContext(ProjectContext);
    const {selectedCurrentProjectByUser} = projectsContext;
    
    const onClickselectedProject = () => {
        selectedCurrentProjectByUser(project.id);
    }

    return (
        <button onClick={onClickselectedProject} type="button" className="btn btn-blank">{project.projectName}</button>
    );
}

export default Project;