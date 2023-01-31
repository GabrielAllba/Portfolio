import { createSlice, configureStore } from "@reduxjs/toolkit";

import { createJSONToken } from "util/auth";

const initialAuthState = {
    isAuthenticated: false,
    token: ''
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state, action){
            const email = action.payload.email
            const token = createJSONToken(email)
            state.isAuthenticated = true

            return {
                token: token
            }

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