import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Login from './components/auth/Login';
import NewUser from './components/auth/NewUser';
import Projects from './components/project/Projects';
import ProjectState from './context/projects/ProjectState';
import TaskState from './context/tasks/TaskState';
import AlertState from './context/alerts/AlertState';
import AuthState from './context/userAuthentication/AuthState';
import tokenAuthentication from './config/tokenAuthentication';
import PrivateRoute from './components/routes/PrivateRoute';

const token = localStorage.getItem('token');
if(token) {
  tokenAuthentication(token);
}

function App() {  
  return (
    <AuthState>
      <AlertState>
        <ProjectState>
          <TaskState>
              <Router>
                <Switch>
                  <Route exact path="/" component={Login}/>
                  <Route exact path="/newuser" component={NewUser}/>
                  <PrivateRoute exact path="/projects" component={Projects}/>
                </Switch>
              </Router>
          </TaskState>
        </ProjectState>
      </AlertState>
    </AuthState>
  );
}
export default App;
