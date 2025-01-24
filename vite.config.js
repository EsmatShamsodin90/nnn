import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import TicTacToe from '@/views/TicTacToe.vue';

export default defineConfig({
  plugins: [vue()],
  base: '/nnn/', // نام مخزن GitHub خود را اینجا قرار دهید
  build: {
    outDir: 'dist',  // اطمینان حاصل کنید که خروجی به پوشه dist انجام می‌شود
  },
});
