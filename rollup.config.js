import { signalTransformPlugin } from "./signalTransformPlugin";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "signalr",
  plugins: [
    nodeResolve(),
    commonjs(),
    signalTransformPlugin({
      include: /signalr\/jquery.signalR.js/,
    }),
    terser(),
  ],
  output: {
    file: "dist/bundle.js",
    format: "es",
  },
};
