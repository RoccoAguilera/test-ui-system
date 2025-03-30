import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Main from "./components"
import "./style.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
