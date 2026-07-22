import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev
export default defineConfig({
     plugins: [react()],
  define:{
    'import.meta.env.VITE_OMDB_API_KEY':JSON.stringify('de400b4d'),
    'import.meta.env.VITE_OPENROUTER_API_KEY': JSON.stringify('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')
  }, 
  server:{
    proxy:{
      '/openrouter-api':{
        target:'https://openrouter.ai',
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/openrouter-api/,'')
      }
    }
  }
});
 