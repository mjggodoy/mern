import React from 'react';
import SideBar from './../layout/SideBar';
import Bar from './../layout/Bar';
import TaskForm from './../task/TaskForm';
import TaskList from './../task/TaskList';

const Projects = () => {
    return (
        <div className="container-app">
            <SideBar/>
            <div className="main-section">
                <Bar/>
                <main>
                <TaskForm/>
                    <div className="containter-tasks">
                        <TaskList/>
                    </div>
                </main>
            </div>
        </div>
    );
}
export default Projects;
