import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/project16_front_end/", // This should be the name of your GitHub repo
});
