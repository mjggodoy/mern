import React, {useReducer}from 'react';
import {SHOW_ALERT, HIDE_ALERT} from '../../types';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';

const AlertState = props => {
    const initialState = {
        alert: null
    };

    const [state, dispatch] = useReducer(AlertReducer, initialState) ;

    const showAlert = (message, category) => {
        console.log(message, category);
        dispatch({
            type: SHOW_ALERT,
            payload: {
                message, 
                category
            }
        });

        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT,
            });
        }, 10000)
    }

    return(
        <AlertContext.Provider
            value = {{
                alert : state.alert,
                showAlert
            }}>
            {props.children}
        </AlertContext.Provider>
    )
}
export default AlertState;
