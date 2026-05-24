import baseConfig from './eslint.config.js';

export default [
  ...baseConfig,
  {
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
];
