import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/JEVION-2K26/',
  plugins: [
    react(),
    tailwindcss()
  ]
});
