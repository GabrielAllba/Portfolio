import { createSlice, configureStore } from "@reduxjs/toolkit";

import { createJSONToken } from "util/auth";

const initialAuthState = {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state, action){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export const authActions = authSlice.actions

export default store