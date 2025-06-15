import { Routes } from '@angular/router';
import { adminRoutes } from './admin/admin.routes';

// Layouts
import { PublicLayout } from './layout/public-layout/public-layout';
import { AdminLayout } from './admin/layout/admin-layout/admin-layout';

// Pages publiques et utilisateur
import { Home } from './pages/home/home';
import { ArticlesComponent as Articles } from './pages/articles/articles';
import { ArticleDetailComponent } from './pages/article-detail/article-detail';
import { ArticleEdit } from './pages/article-edit/article-edit';
import { Categories } from './pages/categories/categories';
import { LoginComponent } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';
import { Users } from './pages/users/users';
import { Notifications } from './pages/notifications/notifications';
import { Error404 } from './pages/error404/error404';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'articles', // 🔁 Redirection automatique
      },
      { path: 'articles', component: Articles },
      { path: 'articles/:id', component: ArticleDetailComponent },
      { path: 'article-edit/:id', component: ArticleEdit },
      { path: 'categories', component: Categories },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login').then((m) => m.LoginComponent),
      },
      { path: 'register', component: Register },
      { path: 'profile', component: Profile },
      { path: 'users', component: Users },
      { path: 'notifications', component: Notifications },
    ],
  },

  {
    path: 'admin',
    component: AdminLayout,
    children: adminRoutes,
  },

  { path: '**', component: Error404 },
];
