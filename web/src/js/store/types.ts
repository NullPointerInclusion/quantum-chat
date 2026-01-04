export interface AuthenticationState {
  authenticated: boolean;
  userid: string;
  token: string;
}

export interface ConnectionState {
  status: "disconnected" | "connecting" | "connected";
  websocket: WebSocket;
}

export interface GlobalState {
  authentication: AuthenticationState;
  connection: ConnectionState;
}
