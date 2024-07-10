import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: ["dist"],
      staticImport: true,
      insertTypesEntry: true,
    }),
  ],

  build: {
    lib: {
      entry: [resolve(__dirname, "src/index.ts")],
      formats: ["es"],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["react", "react-dom"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: "react",
          "react-dom": "react-dom",
        },
      },
    },
  },
});
