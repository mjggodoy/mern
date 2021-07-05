import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/userAuthentication/AuthContext';

const Bar = () => {
    const {user, returnAuthenticatedUser, closeSession} = useContext(AuthContext);

    useEffect(() => {
        returnAuthenticatedUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
       <header className="app-header">
           {user ? <p className="user-name"><span>Welcome, {user.userName}!</span></p>: null}
            <nav className="nav-main">
                <button className="btn btn-blank close-session" onClick={() => closeSession()}>Close session</button>
            </nav>
       </header>
    );
}

export default Bar;
