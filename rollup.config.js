import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-cpy';
import { createDefaultConfig } from '@open-wc/building-rollup';

const config = createDefaultConfig({
  input: './index.html',
  extensions: ['.js', '.mjs', '.ts'],
});

export default {
  ...config,
  output: {
    ...config.output,
    sourcemap: true,
  },
  plugins: [...config.plugins,
    copy({
      files: ['src/images/*.svg'],
      dest: 'dist/images/',
      options: {
        verbose: true,
      }
    }),
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
};




module.exports = createDefaultConfig({
  input: './index.html',
  extensions: ['.js', '.mjs', '.ts'],
});
