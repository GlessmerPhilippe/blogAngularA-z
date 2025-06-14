import { Routes } from '@angular/router';

// Layout
import { AdminLayout } from './layout/admin-layout/admin-layout';

// Pages
import { Dashboard } from './pages/dashboard/dashboard';
import { ArticlesList } from './pages/articles-list/articles-list';
import { ArticleForm } from './pages/article-form/article-form';
import { CommentsList } from './pages/comments-list/comments-list';
import { UsersList } from './pages/users-list/users-list';
import { CategoriesList } from './pages/categories-list/categories-list';
import { CategoryForm } from './pages/category-form/category-form';
import { MediaManager } from './pages/media-manager/media-manager';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayout,
    children: [
      { path: '', component: Dashboard },
      { path: 'articles', component: ArticlesList },
      { path: 'articles/new', component: ArticleForm },
      { path: 'articles/edit/:id', component: ArticleForm },
      { path: 'comments', component: CommentsList },
      { path: 'users', component: UsersList },
      { path: 'categories', component: CategoriesList },
      { path: 'categories/new', component: CategoryForm },
      { path: 'categories/edit/:id', component: CategoryForm },
      { path: 'medias', component: MediaManager }
    ]
  }
];
