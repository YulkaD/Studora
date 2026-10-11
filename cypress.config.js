import { defineConfig } from "cypress";
import viteConfig from "./vite.config.js";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {},
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig,
    },
    supportFile: false, 
  },
});