import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

const { assign } = Object

/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
  /** @type {import('vite').UserConfig} */
  const config = {
    plugins: [ViteMinifyPlugin()],
    build: {
      rollupOptions: {
        input: ['./index.html'],
      },
    },
  }

  if (mode === 'production')
    return assign(config, {
      build: {
        minify: 'terser',
        cssMinify: true,
        terserOptions: {
          parse: { html5_comments: false },
          format: { comments: false },
        },
      },
    })

  return config
})
