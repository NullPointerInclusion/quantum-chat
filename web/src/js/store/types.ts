export interface User {
  id: string
  username: string
  firstName: string
  lastName: string
}
export interface AuthenticationState {
  authenticated: boolean;
  user: User;
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
