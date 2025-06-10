export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://your-github-pages-url.github.io'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: '*',
    },
  },
];
