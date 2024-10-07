import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
// import vueDevTools from 'vite-plugin-vue-devtools'
import postCssPxToRem from 'postcss-pxtorem'

import AutoImport from 'unplugin-auto-import/vite'
// import {} from 'unplugin-vue-components/resolvers'
import { VantResolver } from '@vant/auto-import-resolver'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    open: true,
    hmr: true,
    https: false,
    proxy: {
      // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    postCssPxToRem({
      // 配置在将px转化为rem时 1rem等于多少px(因为我们搭配使用了amfe-flexible插件 此处我们需要设置的值应是UI设计稿全屏基准宽度的十分之一)
      // 当UI设计稿的全屏基准宽度是750px时 此处设置的值为75 但项目中使用了vant组件库 vant的设计稿总宽度是375px 其十分之一应是37.5(需要区分设置)
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // 所有px均转化为rem
      propList: ['*']
      // 若想设置部分样式不转化 可以在配置项中写出
      // eg: 除 border和font-size外 所有px均转化为rem
      // propList: ["*", "!border","!font-size"],
    }),

    AutoImport({
      resolvers: [VantResolver()],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: ['vue', 'vue-router'],
      dirs: [
        // './hooks',
        // './composables' // only root modules
        // './composables/**', // all nested modules
        // ...
      ],
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: false // Default `false`
      }
    }),
    Components({
      resolvers: [VantResolver()],
      dirs: ['src/components'],
      dts: true
    })

    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 2000,
    minify: 'terser', // terser体积小，esbuild速度快
    assetsInlineLimit: 4000 // 超过转为base64
  }
})
