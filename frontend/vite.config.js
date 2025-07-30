import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',   // ✅ ensures frontend build folder is 'dist'
  },
  base: '/',          // ✅ ensures paths are correct in production
});
