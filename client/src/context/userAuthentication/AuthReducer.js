import {USER_REGISTER_SUCCESS, USER_REGISTER_ERROR, LOGIN_ERROR, USER_LOGOUT, USER_LOGIN_SUCCESS, GET_USER} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case USER_LOGIN_SUCCESS:
        case USER_REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.data.token);
            const token = localStorage.getItem('token');
            return {
                 ...state,
                isUserAuthenticated: true,
                message: null,
                token : token
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                chargingPage: false,
                isUserAuthenticated: true,
            }
        case LOGIN_ERROR:
        case USER_REGISTER_ERROR:
        case USER_LOGOUT:
            localStorage.removeItem('token');
            let alertAuth = {};
            if (action.payload) {
                alertAuth = {
                    message: action.payload.message,
                    category: action.payload.category
                }
            } else {
                alertAuth = {
                    message: action.payload
                }
            }
            return {
                ...state,
                chargingPage: false,
                isUserAuthenticated: false,
                alertAuth,
                token: null,
                user: null
           }
        default: 
            return state;
    }
}
