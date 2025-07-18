import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      Assets: '/src/Assets',
      Components: '/src/Components',
      Configs: '/src/Configs',
      Helpers: '/src/Helpers',
      Layouts: '/src/Layouts',
      Pages: '/src/Pages',
      Redux: '/src/Redux',
      Routes: '/src/Routes'
    }
  }
});