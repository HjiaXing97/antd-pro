import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

const resolvePath = (str: string) => path.resolve(__dirname, str);
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../dist",
    lib: {
      entry: "./src/index.ts",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "antd"],
      output: [
        {
          globals: {
            react: "react",
            antd: "antd",
            "react-dom": "react-dom",
          },
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          exports: "named",
          //配置打包根目录
          dir: "dist/es",
          //   preserveModules: true,
        },
        {
          globals: {
            react: "react",
            antd: "antd",
            "react-dom": "react-dom",
          },
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          exports: "named",
          //配置打包根目录
          dir: "dist/lib",
          //   preserveModules: true,
        },
      ],
    },
  },
  //   build: {
  //     outDir: "../dist",
  //     lib: {
  //       entry: "src/index.ts", // 入口文件路径
  //       formats: ["es", "cjs"], // 输出的格式，包括ES module和CommonJS
  //       fileName: (format) => `index.${format}.js`, // 输出的文件名格式
  //     },
  //     rollupOptions: {
  //       external: ["react", "react-dom"], // 外部依赖项
  //       output: {
  //         globals: {
  //           react: "React",
  //           "react-dom": "ReactDOM",
  //         },
  //       },
  //     },
  //   },
});
