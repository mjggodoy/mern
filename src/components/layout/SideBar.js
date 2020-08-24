import React from 'react';
import NewProject from './../proyect/NewProject';
import ListProjects from './../proyect/ListProjects';

const SideBar = () => {
    return (
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <NewProject/>
            <div className="projects">
                <h2>My projects</h2>
                <ListProjects/>
            </div>
        </aside>
    );
}
export default SideBar;
