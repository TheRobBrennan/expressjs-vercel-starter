import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Ensure Vitest is configured to pick up .test.ts files across your project
    include: ['src/**/*.test.ts'],
    globals: true,
    environment: 'node',

    // NOTE: Set silent to false to see console output during test execution
    silent: true
  },
});
