import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  host: {
    server: '127.0.0.1',
  },
  plugins: [react()],
});
