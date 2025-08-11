import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['app/**/*.test.ts?(x)', 'routes/**/*.test.ts?(x)', 'welcome/**/*.test.ts?(x)'], // add folders as needed
  },
});
