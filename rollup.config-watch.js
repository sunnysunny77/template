import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import serve from 'rollup-plugin-serve';
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
    serve({
      // Launch in browser (default: false)
      open: true,
      // Page to navigate to when opening the browser.
      openPage: '/index.html',
      // Folder to serve files from
      contentBase: './',
      // Options used in setting up server
      host: 'localhost',
      port: 8008,
    }),
    livereload('./')
  ],
};