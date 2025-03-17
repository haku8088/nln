import { UserState } from "@/interfaces/userState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  currentUser: null,
  isFetching: false,
  isError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{
        accessToken: string;
        phone: string;
        email: string;
      }>
    ) => {
      state.isError = false;
      state.isFetching = false;
      state.currentUser = action.payload;
      if (state.currentUser) {
        window.localStorage.setItem("token", state.currentUser.accessToken);
      }
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },

    logout: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      window.localStorage.removeItem("token");
    },
    resetState: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.isError = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, resetState } =
  userSlice.actions;

export default userSlice.reducer;
