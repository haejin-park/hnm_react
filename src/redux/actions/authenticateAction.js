import { authenticateActions } from "../reducers/authenticateReducer";

function login(id, password) {
    return(dispatch, getState) => {
        dispatch(authenticateActions.login({id, password}))
    };
}

function logout(){
    return(dispatch, getState) => {
        dispatch(authenticateActions.logout());
    }
}

export const authenticateAction = {login, logout};