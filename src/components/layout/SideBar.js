import React from 'react';
import NewProject from './../proyect/NewProject';

const SideBar = () => {
    return (
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <NewProject/>
            <div className="projects">
                <h2>My projects</h2>
            </div>
        </aside>
    );
}
export default SideBar;
