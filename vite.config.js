import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';
import { quasar } from '@quasar/vite-plugin';
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'vuejs/admin-app/app.js',
                'resources/sass/custom.scss',
                'vuejs/web-app/app.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        quasar(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            '@admin': path.resolve(__dirname, 'vuejs/admin-app'),
            '@store_admin': path.resolve(__dirname, 'vuejs/admin-app/stores'),
            '@web': path.resolve(__dirname, 'vuejs/web-app'),
            '@store_admin_endpoints': path.resolve(
                __dirname,
                'vuejs/admin-app/stores/admin/endpoints'
            ),
            '@store_admin_models': path.resolve(
                __dirname,
                'vuejs/admin-app/stores/admin/models'
            ),
            '@store_web': path.resolve(__dirname, 'vuejs/web-app/stores'),
            '@store_web_endpoints': path.resolve(
                __dirname,
                'vuejs/admin-app/stores/web/endpoints'
            ),
        },
    },
});
