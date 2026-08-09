/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     environment: "jsdom",
//   },
// });

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/yeet-to-prod/" : "/",   // ← replace yeet-to-prod with YOUR repo name
  plugins: [react()],
  test: {
    environment: "jsdom",   // component tests need a fake browser DOM
  },
}));