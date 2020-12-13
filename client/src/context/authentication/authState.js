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
        message : null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const registerUser = async data => {
        console.log(data);
        try {
            const response = await clientAxios.post('api/users', data);
            console.log(response);
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: response
            });
        } catch(error) {
            const alert = {
                message : error.response.data.msg,
                category: 'alert-error'
            };
            dispatch({
                type: USER_REGISTER_ERROR,
                payload: alert
            });
        }
    }
    
    return(
        <AuthContext.Provider
            value = {{
                token : state.token,
                isAuthenticated : state.isUserAuthenticated,
                user : state.user,
                message : state.message,
                registerUser,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthState;
