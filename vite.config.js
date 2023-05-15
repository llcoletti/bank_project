import { defineConfig } from 'vite';
import postcss from './postcss.config.js';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    css: {
      postcss,
    },
  };

  if (command !== 'serve') {
    config.base = '/bank_project/';
  }

  return config;
});
