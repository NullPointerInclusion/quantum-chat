import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth.ts";
import { connSlice } from "./conn.ts";

export const store = configureStore({
  reducer: {
    authentication: authSlice.reducer,
    connection: connSlice.reducer,
  },
});

export const actions = {
  authentication: authSlice.actions,
  connection: connSlice.actions,
};
