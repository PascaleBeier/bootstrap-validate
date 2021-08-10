import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import sizes from 'rollup-plugin-sizes';

export default {
  input: 'src/index.js',
  inlineDynamicImports: true,
  output: [
    {
      file: 'dist/bootstrap-validate.amd.js',
      format: 'amd',
      name: 'BootstrapValidate',
      exports: 'default',
    },
    {
      file: 'dist/bootstrap-validate.cjs.js',
      format: 'cjs',
      name: 'BootstrapValidate',
      exports: 'default',
    },
    {
      file: 'dist/bootstrap-validate.esm.js',
      format: 'esm',
      name: 'BootstrapValidate',
      exports: 'default',
    },
    {
      file: 'dist/bootstrap-validate.js',
      format: 'iife',
      name: 'BootstrapValidate',
      exports: 'default',
    },
    {
      file: 'dist/bootstrap-validate.umd.js',
      format: 'umd',
      name: 'BootstrapValidate',
      exports: 'default',
    },
    {
      file: 'dist/bootstrap-validate.system.js',
      format: 'system',
      name: 'BootstrapValidate',
      exports: 'default',
    },
  ],
  plugins: [
    resolve(),
    sizes(),
    dynamicImportVars(),
    babel({ babelHelpers: 'runtime', exclude: [/core-js/] })
  ]
};
