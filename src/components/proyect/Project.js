import React from 'react';

const Project = ({project}) => {
    return (
        <button type="button" className="btn btn-blank">{project.projectName}</button>
    );
}

export default Project;