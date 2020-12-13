import {USER_REGISTER_SUCCESS, USER_REGISTER_ERROR, USER_LOGOUT, USER_LOGIN_SUCCESS, GET_USER} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case USER_REGISTER_SUCCESS:
            console.log('here', action.payload, action.payload.data.token);
            localStorage.setItem('token', action.payload.data.token);
            const token = localStorage.getItem('token');
            
            return {
                 ...state,
                isUserAuthenticated: true,
                message: message,
                token : token
            }
        case USER_REGISTER_ERROR:
            const message = action.payload.msg;
            console.log(message);
            return {
                ...state,
               isUserAuthenticated: false,
               message: message,
               token: null
           }
        default: 
            return state;
    }
}
