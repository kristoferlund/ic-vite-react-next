import { AgentProvider } from "@ic-reactor/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BackendProvider } from "./service/backend.ts";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <AgentProvider withProcessEnv>
      <BackendProvider>
        <App />
      </BackendProvider>
    </AgentProvider>
  </StrictMode>,
);
