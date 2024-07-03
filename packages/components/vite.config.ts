import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "modules",
    outDir: "es",
    minify: true,
    lib: {
      entry: "src/index.ts", // 入口文件路径
      name: "AntdProComponent", // 输出的库名称
      fileName: (format) => `antd-pro-components.${format}.js`, // 输出文件名格式
    },
    rollupOptions: {
      output: [
        {
          format: "es",
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: resolve(__dirname, "./dist/es"),
          globals: {
            react: "React", // 如果有外部依赖库，需要配置全局变量
            "react-dom": "ReactDOM",
          },
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: resolve(__dirname, "./dist/lib"),
          globals: {
            react: "React", // 如果有外部依赖库，需要配置全局变量
            "react-dom": "ReactDOM",
          },
        },
      ],
    },
  },
});
