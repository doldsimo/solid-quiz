import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";


export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
    solidPlugin(),
    dts({
      insertTypesEntry: true,
      exclude: ["node_modules/**", "test-project/node_modules/**"],
    })
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    lib: {
      entry: "./src/Quiz/Quiz.jsx",
      name: "SolidQuiz",
      fileName: (format) => `solid-quiz.${format}.js`,
      formats: ["es", "umd"],
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ["solid-js"],
      output: {
        manualChunks: undefined,
      },
    },
  },
});
