import { defineConfig } from "vite"
import laravel from "laravel-vite-plugin"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import { resolve } from "path"
import { sveltePreprocess } from "svelte-preprocess/dist/autoProcess"

export default defineConfig({
    server: {
        host: "0.0.0.0",
        hmr: {
            host: "localhost",
        },
        watch: {
            usePolling: true,
        },
    },
    publicDir: "files",
    build: {
        manifest: true,
        outDir: resolve(__dirname, "public/dist"),
        rollupOptions: {
            input: "resources/js/app.js",
        },
    },
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        svelte({
            preprocess: [ sveltePreprocess({ typescript: true })]
        }),
        {
            name: "blade",
            handleHotUpdate({ file, server }) {
                if (file.endsWith(".blade.php")) {
                    server.ws.send({
                        type: "full-reload",
                        path: "*",
                    })
                }
            },
        },
    ],
    resolve: {
        alias: {
            "@": resolve("./resources/js"),
        },
    },
})
