// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Importation de toutes les pages (routables)
// (Adapte les chemins selon tes vrais fichiers !)
import { Home } from './pages/home/home';
import { ArticlesComponent as Articles } from './pages/articles/articles';
import { ArticleDetail } from './pages/article-detail/article-detail';
import { ArticleEdit } from './pages/article-edit/article-edit';
import { Categories } from './pages/categories/categories';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';
import { Users } from './pages/users/users';
import { Notifications } from './pages/notifications/notifications';
import { Error404 } from './pages/error404/error404';

// Admin pages
import { AdminDashboard } from './pages/admin/dashboard/dashboard';
import { AdminArticles } from './pages/admin/articles/articles';
import { AdminUsers } from './pages/admin/users/users';
import { AdminComments } from './pages/admin/comments/comments';
import { AdminSettings } from './pages/admin/settings/settings';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'articles', component: Articles },
  { path: 'articles/:id', component: ArticleDetail },
  { path: 'article-edit/:id', component: ArticleEdit }, // ou simplement /article-edit pour création
  { path: 'categories', component: Categories },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'profile', component: Profile },
  { path: 'users', component: Users }, // accessible/admin uniquement
  { path: 'notifications', component: Notifications },

  // Section admin avec sous-routes
  {
    path: 'admin',
    children: [
      { path: '', component: AdminDashboard }, // /admin
      { path: 'dashboard', component: AdminDashboard },
      { path: 'articles', component: AdminArticles },
      { path: 'users', component: AdminUsers },
      { path: 'comments', component: AdminComments },
      { path: 'settings', component: AdminSettings },
    ]
  },

  // 404
  { path: '**', component: Error404 },
];
