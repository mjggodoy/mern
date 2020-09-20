import React, {useContext} from 'react';
import ProjectContext from '../../context/projectos/ProjectContext';
import TaskContext from '../../context/tasks/TaskContext';

const Project = ({project}) => {
    const projectsContext = useContext(ProjectContext);
    const {selectedCurrentProjectByUser} = projectsContext;

    const tasksContext = useContext(TaskContext);
    const {getTasksByProjectId} = tasksContext;
    
    const onClickselectedProject = () => {
        selectedCurrentProjectByUser(project.id);
        getTasksByProjectId(project.id);
    }

    return (
        <button onClick={onClickselectedProject} type="button" className="btn btn-blank">{project.projectName}</button>
    );
}

export default Project;