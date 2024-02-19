import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    id:'',
    password: '',
    authenticate: false,
    errorMessage: '',
}

const authenticateSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.id = action.payload.id;
            state.password= action.payload.password;
            state.authenticate = true;
            state.errorMessage = '';
        },
        logout(state, action) {
            state.id = '';
            state.password = '';
            state.authenticate = false;
            state.errorMessage = '';
        },
        setErrorMessage(state, action) {
            state.errorMessage = action.payload;
        },
    }
});

export const authenticateActions = authenticateSlice.actions;
export default authenticateSlice.reducer;