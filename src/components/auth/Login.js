import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  
    const [userInformation, saveUserInformation] = useState({
        email : "", 
        password:""
    });
   
    const startSession = e => {
        saveUserInformation({
            ...userInformation, 
            [e.target.name]: e.target.value});
    }
    
    const onSubmit = e => {
        e.preventDefault();

    }

    const {email, password} = userInformation;
    
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>User Login</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email:</label>
                        <input type="email" 
                            id="email" 
                            name="email"
                            placeholder="mjggodoy@gmail.com" 
                            value={email}
                            onChange={startSession}>
                        </input>
                    </div>
                    
                    <div className="campo-form">
                        <label htmlFor="password">Password:</label>
                        <input type="password" 
                            id="password" 
                            name="password"
                            placeholder="password"
                            value={password} 
                            onChange={startSession}>
                        </input>
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Start session"></input>
                    </div>
                </form>
                <Link to={"/newuser"} className="enlace-cuenta">Get new account</Link>
            </div>
        </div>
    );
}
export default Login;