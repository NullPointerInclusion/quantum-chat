import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "./components/App/App.tsx";

const root = createRoot(document.querySelector("main")!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
