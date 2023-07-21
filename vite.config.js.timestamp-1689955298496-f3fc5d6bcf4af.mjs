// vite.config.js
import { defineConfig } from "file:///mnt/c/Projetos/web/php/firstapp/node_modules/vite/dist/node/index.js";
import laravel from "file:///mnt/c/Projetos/web/php/firstapp/node_modules/laravel-vite-plugin/dist/index.mjs";
import { svelte } from "file:///mnt/c/Projetos/web/php/firstapp/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import { resolve } from "path";
import { sveltePreprocess } from "file:///mnt/c/Projetos/web/php/firstapp/node_modules/svelte-preprocess/dist/autoProcess.js";
var __vite_injected_original_dirname = "/mnt/c/Projetos/web/php/firstapp";
var vite_config_default = defineConfig({
  server: {
    host: "0.0.0.0",
    hmr: {
      host: "localhost"
    },
    watch: {
      usePolling: true
    }
  },
  publicDir: "files",
  build: {
    manifest: true,
    outDir: resolve(__vite_injected_original_dirname, "public/dist"),
    rollupOptions: {
      input: "resources/js/app.js"
    }
  },
  plugins: [
    laravel({
      input: ["resources/css/app.css", "resources/js/app.js"],
      refresh: true
    }),
    svelte({
      preprocess: [sveltePreprocess({ typescript: true })]
    }),
    {
      name: "blade",
      handleHotUpdate({ file, server }) {
        if (file.endsWith(".blade.php")) {
          server.ws.send({
            type: "full-reload",
            path: "*"
          });
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": resolve("./resources/js")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvUHJvamV0b3Mvd2ViL3BocC9maXJzdGFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1Byb2pldG9zL3dlYi9waHAvZmlyc3RhcHAvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1Byb2pldG9zL3dlYi9waHAvZmlyc3RhcHAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgbGFyYXZlbCBmcm9tIFwibGFyYXZlbC12aXRlLXBsdWdpblwiXG5pbXBvcnQgeyBzdmVsdGUgfSBmcm9tIFwiQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZVwiXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIlxuaW1wb3J0IHsgc3ZlbHRlUHJlcHJvY2VzcyB9IGZyb20gXCJzdmVsdGUtcHJlcHJvY2Vzcy9kaXN0L2F1dG9Qcm9jZXNzXCJcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBzZXJ2ZXI6IHtcbiAgICAgICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgICAgIGhtcjoge1xuICAgICAgICAgICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHVzZVBvbGxpbmc6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBwdWJsaWNEaXI6IFwiZmlsZXNcIixcbiAgICBidWlsZDoge1xuICAgICAgICBtYW5pZmVzdDogdHJ1ZSxcbiAgICAgICAgb3V0RGlyOiByZXNvbHZlKF9fZGlybmFtZSwgXCJwdWJsaWMvZGlzdFwiKSxcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgaW5wdXQ6IFwicmVzb3VyY2VzL2pzL2FwcC5qc1wiLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgICBsYXJhdmVsKHtcbiAgICAgICAgICAgIGlucHV0OiBbXCJyZXNvdXJjZXMvY3NzL2FwcC5jc3NcIiwgXCJyZXNvdXJjZXMvanMvYXBwLmpzXCJdLFxuICAgICAgICAgICAgcmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICAgIHN2ZWx0ZSh7XG4gICAgICAgICAgICBwcmVwcm9jZXNzOiBbIHN2ZWx0ZVByZXByb2Nlc3MoeyB0eXBlc2NyaXB0OiB0cnVlIH0pXVxuICAgICAgICB9KSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJibGFkZVwiLFxuICAgICAgICAgICAgaGFuZGxlSG90VXBkYXRlKHsgZmlsZSwgc2VydmVyIH0pIHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZS5lbmRzV2l0aChcIi5ibGFkZS5waHBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyLndzLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmdWxsLXJlbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIqXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgIFwiQFwiOiByZXNvbHZlKFwiLi9yZXNvdXJjZXMvanNcIiksXG4gICAgICAgIH0sXG4gICAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtSLFNBQVMsb0JBQW9CO0FBQy9TLE9BQU8sYUFBYTtBQUNwQixTQUFTLGNBQWM7QUFDdkIsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsd0JBQXdCO0FBSmpDLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFFBQVE7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNELE1BQU07QUFBQSxJQUNWO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDSCxZQUFZO0FBQUEsSUFDaEI7QUFBQSxFQUNKO0FBQUEsRUFDQSxXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsSUFDSCxVQUFVO0FBQUEsSUFDVixRQUFRLFFBQVEsa0NBQVcsYUFBYTtBQUFBLElBQ3hDLGVBQWU7QUFBQSxNQUNYLE9BQU87QUFBQSxJQUNYO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ0osT0FBTyxDQUFDLHlCQUF5QixxQkFBcUI7QUFBQSxNQUN0RCxTQUFTO0FBQUEsSUFDYixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsTUFDSCxZQUFZLENBQUUsaUJBQWlCLEVBQUUsWUFBWSxLQUFLLENBQUMsQ0FBQztBQUFBLElBQ3hELENBQUM7QUFBQSxJQUNEO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixnQkFBZ0IsRUFBRSxNQUFNLE9BQU8sR0FBRztBQUM5QixZQUFJLEtBQUssU0FBUyxZQUFZLEdBQUc7QUFDN0IsaUJBQU8sR0FBRyxLQUFLO0FBQUEsWUFDWCxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDVixDQUFDO0FBQUEsUUFDTDtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBSyxRQUFRLGdCQUFnQjtBQUFBLElBQ2pDO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
