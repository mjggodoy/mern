import React, {useReducer} from 'react';
import {USER_REGISTER_SUCCESS, USER_REGISTER_ERROR, LOGIN_ERROR, USER_LOGOUT, USER_LOGIN_SUCCESS, GET_USER} from '../../types';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import clientAxios from '../../config/axiosClient';
import tokenAuth from '../../config/tokenAuthentication';

const AuthState =  props => {
    const initialState = {
        token : localStorage.getItem('token'),
        isUserAuthenticated : null,
        user : null,
        alertAuth : {},
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const registerUser = async data => {
        try {
            const response = await clientAxios.post('api/users', data);
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: response
            });
            returnAuthenticatedUser();
        } catch(error) {
            console.log(error.response.data.msg);
            const alertAuth = {
                message : error.response.data.msg,
                category: 'alert-error'
            };
            dispatch({
                type: USER_REGISTER_ERROR,
                payload: alertAuth
            });
        }
    }

    const returnAuthenticatedUser = async() => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token);
        }
        try {
            const response = await clientAxios.get('api/authUsers');
            dispatch({
                type: GET_USER,
                payload: response.data.user
            });
        } catch(error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR,
            });
        }
    }

    const initSession = async data => {
        try {
            const response = await clientAxios.post('api/authUsers', data);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: response
            });
            returnAuthenticatedUser();
        } catch(error) {
            const alertAuth = {
                message : null,
                category: 'alert-error'
            };
            if (error.response.data.msg) {
                alertAuth.message = error.response.data.msg
            }
            if (error.response.data.errors) {
                alertAuth.message = error.response.data.errors[0].msg
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alertAuth
            });
        }
    }

    return(
        <AuthContext.Provider
            value = {{
                token : state.token,
                isAuthenticated : state.isUserAuthenticated,
                user : state.user,
                alertAuth : state.alertAuth,
                registerUser,
                initSession,
                returnAuthenticatedUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthState;
