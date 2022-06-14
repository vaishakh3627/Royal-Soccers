import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userData",
  initialState: {
    user: {},
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.userData.user;

export default userSlice.reducer;
