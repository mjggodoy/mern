import React, { useContext, useEffect } from 'react';
import SideBar from './../layout/SideBar';
import Bar from './../layout/Bar';
import TaskForm from './../task/TaskForm';
import TaskList from './../task/TaskList';
import AuthContext from '../../context/userAuthentication/AuthContext';

const Projects = () => {
    const { returnAuthenticatedUser } = useContext(AuthContext);

    useEffect(() => {
        returnAuthenticatedUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
