import React from 'react';

const Login = () => {

    const startSession = () => {
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>User Login</h1>
                <form>
                    <div className="campo-form">
                        <label htmlFor="email">Email:</label>
                        <input type="email" 
                            id="email" 
                            name="email"
                            placeholder="mjggodoy@gmail.com" 
                            onchange={startSession}>
                        </input>
                    </div>
                    
                    <div className="campo-form">
                        <label htmlFor="password">Password:</label>
                        <input type="password" 
                            id="password" 
                            name="password"
                            placeholder="password" 
                            onchange={startSession}>
                        </input>
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Start session"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;