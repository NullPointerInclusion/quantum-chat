import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthenticationState } from "./types.ts";

const initialAuthState: AuthenticationState = { authenticated: false, userid: "", token: "" };
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    setAuthenticated(state, data: PayloadAction<boolean>) {
      state.authenticated = data.payload;
    },
  },
});
const authActions = authSlice.actions;

export { authActions, authSlice };
