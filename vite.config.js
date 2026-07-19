import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'// or your framework plugin
export default defineConfig(({mode }) =>{
  // this loads the variables from Netlify's dashboard during build time
  const env = loadEnv(mode, process.swd(),'')
  return {
     plugins: [react()],
  define:{
    'import.meta.env.VITE_OMDB_API_KEY':JSON.stringify('de400b4d'),
    'import.meta.env.VITE_OPENROUTER_API_KEY': JSON.stringify('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')
  }
}
})
