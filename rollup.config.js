// rollup.config.js
// This configuration bundles the nal-extractor library into multiple formats:
// 1) ES Module (esm) for modern bundlers
// 2) CommonJS (cjs) for Node.js compatibility
// 3) UMD and IIFE for direct browser inclusion as a single file exposing a global variable

import resolve from '@rollup/plugin-node-resolve';       // Locate and bundle dependencies in node_modules
import commonjs from '@rollup/plugin-commonjs';          // Convert CommonJS modules to ES6
import typescript from '@rollup/plugin-typescript';      // Compile TypeScript files

export default [
  // UMD and IIFE builds for browser
  {
    input: 'lib/index.ts',
    output: [
      {
        file: 'dist/nal-extractor.umd.js',
        format: 'umd',           // UMD format for universal usage (Node, AMD, browser)
        name: 'nalExtractor',    // Global variable name on window
        sourcemap: true
      },
      {
        file: 'dist/nal-extractor.iife.js',
        format: 'iife',          // IIFE format for direct <script> inclusion
        name: 'nalExtractor',    // Global variable name
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript()
    ]
  }
];
