import { Routes } from '@angular/router';
import { UsersList } from './users-list/users-list';
import { UserForm } from './user-form/user-form';

export const usersRoutes: Routes = [
  { path: '', component: UsersList },
  { path: 'new', component: UserForm },
  { path: 'edit/:id', component: UserForm }
];
