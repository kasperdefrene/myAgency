import legacy from "@vitejs/plugin-legacy";
import ViteRestart from "vite-plugin-restart";

const viteRestartValue = (() => {
  try {
    return ViteRestart({ reload: ["./templates/**/*"] });
  } catch {
    return ViteRestart.default({ reload: ["./templates/**/*"] });
  }
})();

export default ({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  build: {
    manifest: true,
    outDir: "./web/dist/",
    rollupOptions: {
      input: {
<<<<<<< HEAD
        app: "./src/js/app.js",
=======
        app: "../src/js/app.js",
>>>>>>> a2c00a5be0d8412f4948b889658a08dae7b504ab
      },
    },
  },
  server: {
    // respond to all network requests
    host: "0.0.0.0",
    strictPort: true,
    port: 3000,
    origin: "http://localhost:3000",
  },
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    viteRestartValue,
  ],
});