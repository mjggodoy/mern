import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/userAuthentication/AuthContext';

const PrivateRoute = ({component: Component, ...props}) => {
    const {isAuthenticated, returnAuthenticatedUser, chargingPage} = useContext(AuthContext);
    useEffect(() => {
        returnAuthenticatedUser();
    }, []);

    return(
        <Route {...props}
            render={props => !isAuthenticated && !chargingPage ?  (<Redirect to='/'/>) : (<Component {...props}/>)}
        />
    );
}

export default PrivateRoute;
