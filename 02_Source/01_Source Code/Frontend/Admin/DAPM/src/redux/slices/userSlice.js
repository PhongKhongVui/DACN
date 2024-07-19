import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: null,
        role: null,
        token: localStorage.getItem('token') || null,
        newNotification: 0,
        notifications: [],
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },

        logout: (state) => {
            state.token = null;
            localStorage.removeItem('token');
        },

        setUser: (state, action) => {
            state.profile = action.payload;
            state.role = action.payload.role;
        },

        setNewNotification: (state, action) => {
            state.newNotification = action.payload;
        },

        decreaseNewNotification: (state, action) => {
            state.newNotification = state.newNotification - 1;
        },

        setNotification: (state, action) => {
            state.notifications = action.payload;
        }
    }
});

export const { login, logout, setUser, setNewNotification, setNotification, decreaseNewNotification } = userSlice.actions;
export default userSlice.reducer;