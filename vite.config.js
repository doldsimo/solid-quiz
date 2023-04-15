import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
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
    rollupOptions: {
      external: ["solid-js"],
    },
  },
});
