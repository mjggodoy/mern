import React, {useReducer} from 'react';
import {USER_REGISTER_SUCCESS, USER_REGISTER_ERROR, USER_LOGOUT, USER_LOGIN_SUCCESS, GET_USER} from '../../types';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import clientAxios from '../../config/axiosClient';

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

    return(
        <AuthContext.Provider
            value = {{
                token : state.token,
                isAuthenticated : state.isUserAuthenticated,
                user : state.user,
                alertAuth : state.alertAuth,
                registerUser,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthState;
