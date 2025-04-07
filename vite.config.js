import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: false, // xuất ReactComponent
    }),
  ],
  // base: './'
  resolve: {
    alias: [{ find: "~", replacement: path.resolve(__dirname, "src") }],
  },
});
