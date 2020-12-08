import React, {useReducer} from 'react';
import {USER_REGISTER_SUCCESS, USER_REGISTER_ERROR, USER_LOGOUT, USER_LOGIN_SUCCESS, GET_USER} from '../../types';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

const AuthState =  props => {
    const initialState = {
        token : localStorage.getItem('token'),
        isAuthenticated : null,
        user : null,
        message : null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    return(
        <AuthContext.Provider
            value = {{
                token : state.token,
                isAuthenticated : state.isAuthenticated,
                user : state.user,
                message : state.message
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthState;
