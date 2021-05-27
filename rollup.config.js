import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// "@babel/plugin-external-helpers"

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    // {
    //   file: pkg.main,
    //   format: 'cjs'
    // },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
    peerDepsExternal(),

    nodeResolve(),
    commonjs()
  ]
}
