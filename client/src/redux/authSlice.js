import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logOut: (state) => {
            state.currentUser = null;
        },
        updateUsername: (state, action) => {
            state.currentUser.username = action.payload;
        },
        updateBio: (state, action) => {
            state.currentUser.desc = action.payload;
        }
    }
});

export const {loginStart, loginSuccess, loginFailure, logOut, updateUsername, updateBio} = authSlice.actions;

export default authSlice.reducer;

/*
export const store = configureStore({
    reducer: authSlice.reducer,
})
*/

