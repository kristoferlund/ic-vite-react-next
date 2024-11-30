import { ActorProvider, AgentProvider } from "@ic-reactor/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { canisterId, idlFactory } from "../backend/declarations"
import App from "./App.tsx"
import "./index.css"

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Root element not found")
}

createRoot(rootElement).render(
  <StrictMode>
    <AgentProvider withProcessEnv>
      <ActorProvider canisterId={canisterId} idlFactory={idlFactory}>
        <App />
      </ActorProvider>
    </AgentProvider>
  </StrictMode>
)
