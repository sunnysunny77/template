import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "./js/index.js",
  output: [
    {
      sourcemap: false,
      file: "./js/app.min.js",
      format:  'iife',
      plugins: [terser()]
    }
  ],
  plugins: [
    commonjs(),
    babel({ babelHelpers: "bundled" }),
  ]
};