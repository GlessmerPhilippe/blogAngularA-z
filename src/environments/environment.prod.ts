export const environment = {
  production: true,
  api: {
    base: 'https://api.monsite.com',
    routes: {
      login: '/auth/login',
      articles: '/api/articles',
      upload: '/api/upload',
      categories: '/api/categories',
      user: '/api/user'
    }
  }
};
