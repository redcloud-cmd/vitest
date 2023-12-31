/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {vitestConfig} from './vitestConfig'
// https://vitejs.dev/config/
export default defineConfig({
  test:{
    globals:true
    // ...vitestConfig
  },
  plugins: [vue()],
  resolve:{
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"]
  }
  // extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
})
