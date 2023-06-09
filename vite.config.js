import process from 'process';
import vue from '@vitejs/plugin-vue'
import {defineConfig, loadEnv, splitVendorChunkPlugin} from 'vite'
import {fileURLToPath, URL} from 'node:url'
import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineConfig(({mode}) => {
    const isProd = mode === 'production'
    const env = loadEnv(mode, process.cwd())
    return {
        plugins: [
            vue({
                template: {transformAssetUrls},
                // vue 3.3 新特性
                script: {
                    defineModel: true,
                    propsDestructure: true
                }
            }),
            vuetify({autoImport: true}),
            splitVendorChunkPlugin()
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        build: {
            minify: true,
            cssMinify: true,
            publicPath: './',
            cssCodeSplit: true,
            sourcemap: !isProd,
            assetsDir: 'assets',
            assetsInlineLimit: 4096,
            reportCompressedSize: true,
            chunkSizeWarningLimit: 2000,
            outDir: isProd ? 'release' : 'preview',
            rollupOptions: {
                output: {
                    format: 'es',
                    entryFileNames: 'js/[name].[hash].js',
                    assetFileNames: '[ext]/[name].[hash].[ext]',
                    // manualChunks(id) {
                    //     if (id.includes('node_modules')) {
                    //         return id.toString().split('node_modules/')[1].split('/')[0].toString()
                    //     }
                    // }, // 拆分js到模块文件夹
                    chunkFileNames: (chunkInfo) => {
                        const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : []
                        const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]'
                        return `js/${fileName}/[name].[hash].js`
                    }
                }, // 配置其他插件或特定文件的加载
                external: ['vue', '@mdi/font', 'roboto-fontface', 'vue-router', 'vuetify', 'webfontloader', 'pinia'],
                plugins: []
            }
        }, server: {
            port: 3000,
            '/api': {
                changeOrigin: true,
                target: env['VITE_APP_XHR_URL'],
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            '/cly': {
                changeOrigin: true,
                target: env['VITE_APP_XHR_URL'],
                rewrite: (path) => path.replace(/^\/cly/, '')
            },
            '/zlgk': {
                changeOrigin: true,
                target: env['VITE_APP_XHR_URL'],
                rewrite: (path) => path.replace(/^\/zlgk/, '')
            },
            '/jklc': {
                changeOrigin: true,
                target: env['VITE_APP_XHR_URL'],
                rewrite: (path) => path.replace(/^\/jklc/, '')
            }
        }
    }
})