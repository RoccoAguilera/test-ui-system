import { StrictMode, useState } from "react"
import { createRoot } from "react-dom/client"
import Controller from "./controller"
import Components from "./components"
import "./style.css"

type FontList = {
  [key: string]: string,
  sans: string,
  serif: string,
  mono: string,
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App() {
  const [font, setFont] = useState("inter")

  const fontsList: FontList = {
    "sans": "font-sans",
    "serif": "font-serif",
    "mono": "font-mono",
    "inter": "font-inter",
    "poppins": "font-poppins",
    "roboto": "font-roboto",
  }

  return (
    <div className="px-4 max-sm:px-2">
      <Controller font={font} setFont={setFont} />
      <Components font={fontsList[font]} />
    </div>
  )
}