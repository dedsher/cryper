import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@app": path.resolve("./src/app"),
      "@entities": path.resolve("./src/entities"),
      "@shared": path.resolve("./src/shared"),
      "@features": path.resolve("./src/features"),
      "@widgets": path.resolve("./src/widgets"),
      "@pages": path.resolve("./src/pages"),

    },
  },
})
