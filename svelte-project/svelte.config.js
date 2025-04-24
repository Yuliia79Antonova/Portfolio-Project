import adapter from '@sveltejs/adapter-static';

const repo = 'Portfolio-Project';   // имя репозитория

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: `/${repo}`,            // <‑‑ ключевая строка
    },
    prerender: { entries: ['*'] }  // генерировать все страницы
  }
};
