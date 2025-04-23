import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

export default {
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    paths: {
      base: dev ? '' : '/Portfolio-Project'
    }
  }
};
