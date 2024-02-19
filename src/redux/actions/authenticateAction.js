import { authenticateActions } from "../reducers/authenticateReducer";

function login(id, password) {
    return(dispatch, getState) => {
        try {
            dispatch(authenticateActions.login({id, password}));
        } catch (error) {
            console.error(error);
            dispatch(authenticateActions.setErrorMessage(error.message));
        }
    };
}

function logout(){
    return(dispatch, getState) => {
        try {
            dispatch(authenticateActions.logout());
        } catch(error) {
            console.error(error);
            dispatch(authenticateActions.setErrorMessage(error.message));
        }   
    };
}

export const authenticateAction = {login, logout};