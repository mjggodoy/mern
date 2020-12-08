import {SHOW_ALERT, HIDE_ALERT} from '../../types';

export default (state, action) => {
    switch(action.type) {
        default: 
            return state;
        
        case SHOW_ALERT:
            return {alert: action.payload};
        
        case HIDE_ALERT:
            return {alert: null};
    }
}
