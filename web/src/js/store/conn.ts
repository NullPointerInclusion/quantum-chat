import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ConnectionState } from "./types.ts";

const initialConnState: ConnectionState = { status: "disconnected", websocket: {} as WebSocket };
const connSlice = createSlice({
  name: "connection",
  initialState: initialConnState,
  reducers: {
    setStatus(state, data: PayloadAction<ConnectionState["status"]>) {
      state.status = data.payload;
    },
    setWebSocket(state, data: PayloadAction<ConnectionState["websocket"]>) {
      state.websocket = data.payload;
    },
  },
});
const connActions = connSlice.actions;

export { connActions, connSlice };
