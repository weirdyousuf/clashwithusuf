// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 1. Your GitHub URL
  site: 'https://weirdyousuf.github.io', 

  // 2. Your Repository Name (with slashes on both sides)
  base: '/clashwithusuf/', 

  /** * This is the missing piece! 
   * It forces GitHub to look for /work/ instead of just /work
   */
  trailingSlash: 'always', 
});