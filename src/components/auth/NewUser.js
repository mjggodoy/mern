import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NewUser = () => {
  
    const [userInformation, saveUserInformation] = useState({
        userName : "",
        email : "", 
        password:"",
        confirmUser: ""
    });
   
    const startSession = e => {
        saveUserInformation({
            ...userInformation, 
            [e.target.name]: e.target.value});
    }
    
    const onSubmit = e => {
        e.preventDefault();
    }

    const {userName, email, password, confirmUser} = userInformation;
    
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Get a new account</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="userName">Name:</label>
                        <input type="text" 
                            id="userName" 
                            name="userName"
                            placeholder="Pepe García" 
                            value={userName}
                            onChange={startSession}>
                        </input>
                    </div>

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
                        <label htmlFor="confirmUser">Password:</label>
                        <input type="password" 
                            id="confirmUser" 
                            name="confirmUser"
                            placeholder="confirm password"
                            value={confirmUser} 
                            onChange={startSession}>
                        </input>
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Register me!"></input>
                    </div>
                </form>
                <Link to={"/"} className="enlace-cuenta">Start session again!</Link>
            </div>
        </div>
    );
}
export default NewUser;