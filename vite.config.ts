import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/online-shield-spark/", // ⚠️ Tells Vite to map assets inside your subfolder
  tanstackStart: {
    server: { entry: "server" },
  },
});
