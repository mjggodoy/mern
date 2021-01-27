import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/userAuthentication/AuthContext';

const Bar = () => {
    const {returnAuthenticatedUser, user, isAuthenticated, token} = useContext(AuthContext);

    useEffect(() => {
        returnAuthenticatedUser();
    }, []);

    return (
       <header className="app-header">
           {user ? <p className="user-name">Welcome!: <span>{user.userName}</span></p>: null}
            <nav className="nav-main">
                <button className="btn btn-blank close-session">Close session</button>
            </nav>
       </header>
    );
}
export default Bar;
