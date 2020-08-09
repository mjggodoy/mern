import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Login from './components/auth/Login';
import NewUser from './components/auth/NewUser';
import Projects from './components/proyect/Projects';

function App() {
  return (
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/newuser" component={NewUser}/>
            <Route exact path="/projects" component={Projects}/>
          </Switch>
        </Router>
    );
}
export default App;
