import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    user: {}
};
const authenticationSlices = createSlice({
    name: "authentications",
    initialState: initialState,
    reducers: {
        login: (state, action)=>{
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logout: (state, action)=>{
            state = initialState;
        }
    }
});

export default authenticationSlices.reducer;
export const login = authenticationSlices.actions.login;
export const logout = authenticationSlices.actions.logout;