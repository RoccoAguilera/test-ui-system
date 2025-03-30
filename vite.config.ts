import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@ui-system": "/src/ui-system",
    }
  },
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        icon: "16px",
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          plugins: [
            {
              name: "convertColors",
              params: { currentColor: true, }
            },
            {
              name: "removeAttrs",
              params: { attrs: ["stroke-width"], }
            }
          ]
        }
      },
    })
  ],
})
