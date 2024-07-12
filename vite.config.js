import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import VueRouter from "unplugin-vue-router/vite";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";

import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("ion-icon"),
        },
      },
    }),
    AutoImport({
      dirs: [],
      imports: ["vue"],
    }),
    Components({
      dirs: ["src/components"],
      resolvers: [PrimeVueResolver()],
    }),
    VueRouter({}),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
