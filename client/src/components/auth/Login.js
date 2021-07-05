import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from './../../context/alerts/AlertContext';
import AuthContext from '../../context/userAuthentication/AuthContext';

const Login = (props) => {
    const {alert, showAlert} = useContext(AlertContext);
    const {initSession, isAuthenticated, alertAuth} = useContext(AuthContext);

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/projects')
        }

        if (alertAuth.message) {
            showAlert(alertAuth.message, alertAuth.category);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [alertAuth.message, isAuthenticated]);

    const [userInformation, saveUserInformation] = useState({
        email : "", 
        password: ""
    });

    const startSession = e => {
        saveUserInformation({
            ...userInformation, 
            [e.target.name]: e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
        if (email.trim()  === '' || password.trim() === '') {
            showAlert(`All fields are mandatory`, `alert-error`);
        }
        initSession({email, password});
    }

    const {email, password} = userInformation;

    return (
        <div className="form-user">
            {alert ? (<div className={`alert ${alert.category}`}>{alert.message}</div>) : null}
            <div className="container-form shadow-dark">
                <h1>User Login</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="field-form">
                        <label htmlFor="email">Email:</label>
                        <input type="email" 
                            id="email" 
                            name="email"
                            placeholder="mjggodoy@gmail.com" 
                            value={email}
                            onChange={startSession}>
                        </input>
                    </div>
                    <div className="field-form">
                        <label htmlFor="password">Password:</label>
                        <input type="password" 
                            id="password" 
                            name="password"
                            placeholder="password"
                            value={password} 
                            onChange={startSession}>
                        </input>
                    </div>
                    <div className="field-form">
                        <input type="submit" className="btn btn-primary btn-block" value="Start session"></input>
                    </div>
                </form>
                <Link to={"/newuser"} className="link-account">Get new account</Link>
            </div>
        </div>
    );
}

export default Login;
