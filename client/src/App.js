import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Login from './components/auth/Login';
import NewUser from './components/auth/NewUser';
import Projects from './components/project/Projects';
import ProjectState from './context/projects/ProjectState';
import TaskState from './context/tasks/TaskState';
import AlertState from './context/alerts/AlertState';
import AuthState from './context/authentication/AuthState';

function App() {
  console.log(process.env.REACT_APP_URL_BACKEND);
  
  return (
    <AuthState>
      <AlertState>
        <ProjectState>
          <TaskState>
              <Router>
                <Switch>
                  <Route exact path="/" component={Login}/>
                  <Route exact path="/newuser" component={NewUser}/>
                  <Route exact path="/projects" component={Projects}/>
                </Switch>
              </Router>
          </TaskState>
        </ProjectState>
      </AlertState>
    </AuthState>
  );
}
export default App;
