// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/app.scss"],
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      }
    ],
    "nuxt-icons"
  ],
  imports: {
    dirs: ["stores", "model"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/_breakpoints.scss" as *;',
        },
      },
    },
  }
});
