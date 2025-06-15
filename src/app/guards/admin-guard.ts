import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const user = auth.getCurrentUser();
  const isAdmin = user?.roles?.includes('ROLE_ADMIN');

  if (!isAdmin) {
    router.navigate(['/']); // ou '/unauthorized'
    return false;
  }

  return true;
};
