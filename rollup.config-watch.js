import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import livereload from 'rollup-plugin-livereload';

export default {
  input: "js/index.js",
  output: [
    {
      sourcemap: true,
      file: "./js/app.min.js",
      format:  'iife',
      plugins: [terser()]
    }
  ],
  plugins: [
    commonjs(),
    babel({ babelHelpers: "bundled" }),
    livereload("./")
  ]
};