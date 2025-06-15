export const environment = {
  production: false,
  url: 'https://localhost:8000', // Ajout de la propriété url
  api: {
    base: 'https://localhost:8000',
    routes: {
      login: '/auth/login',
      articles: '/api/articles',
      upload: '/api/upload',
      categories: '/api/categories',
      users: '/users',
      register: '/auth/register',
    }
  }
};
