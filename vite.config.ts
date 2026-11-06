import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: true,
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (!id.includes('node_modules')) return;
          if (id.includes('@carbon/ibm-products')) return 'vendor-carbon-products';
          if (id.includes('@carbon/charts'))       return 'vendor-carbon-charts';
          if (id.includes('@carbon/ai-chat'))      return 'vendor-carbon-ai';
          if (id.includes('@carbon/'))             return 'vendor-carbon';
          if (id.includes('@reduxjs/') || id.includes('/react-redux/') || id.includes('/redux-saga/') || id.includes('/redux-persist/')) return 'vendor-redux';
          if (id.includes('/react-router-dom/') || id.includes('/react-router/') || id.includes('/react-dom/') || id.includes('/react/')) return 'vendor-react';
          if (id.includes('/axios/'))              return 'vendor-axios';
        },
      }
    }
  }
})
