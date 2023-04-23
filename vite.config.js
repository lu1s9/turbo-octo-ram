import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "https://lu1s9.github.io/turbo-octo-ram/",
    plugins: [react()],
});
