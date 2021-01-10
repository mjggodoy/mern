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
                user: action.payload
            }
        case LOGIN_ERROR:
        case USER_REGISTER_ERROR:
            return {
                ...state,
               isUserAuthenticated: false,
               alertAuth : {
                   message: action.payload.message,
                   category: action.payload.category
               },
               token: null
           }
        default: 
            return state;
    }
}
