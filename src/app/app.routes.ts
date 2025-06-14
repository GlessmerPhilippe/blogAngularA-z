import { Routes } from '@angular/router';
import { adminRoutes } from './admin/admin.routes';

// Pages publiques et utilisateur
import { Home } from './pages/home/home';
import { ArticlesComponent as Articles } from './pages/articles/articles';
import { ArticleDetailComponent } from './pages/article-detail/article-detail';
import { ArticleEdit } from './pages/article-edit/article-edit';
import { Categories } from './pages/categories/categories';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';
import { Users } from './pages/users/users';
import { Notifications } from './pages/notifications/notifications';
import { Error404 } from './pages/error404/error404';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'articles', component: Articles },
  { path: 'articles/:id', component: ArticleDetailComponent },
  { path: 'article-edit/:id', component: ArticleEdit }, // ou simplement /article-edit pour création
  { path: 'categories', component: Categories },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'profile', component: Profile },
  { path: 'users', component: Users },
  { path: 'notifications', component: Notifications },

  // 👉 Section admin déléguée au layout admin
  {
    path: 'admin',
    children: adminRoutes,
  },

  // 🔄 Redirection par défaut vers /admin ou autre
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full',
  },

  // ❌ 404
  { path: '**', component: Error404 },
];
