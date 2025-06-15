// src/app/shared/navbar/navbar.ts
import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router ,RouterModule} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-public-navbar',
  standalone: true,
  styleUrls: ['./navbar.scss'],
  templateUrl: './navbar.html',
  imports: [CommonModule,RouterModule],
})
export class Navbar {
  auth = inject(AuthService);
  router = inject(Router);
  dropdownOpen = signal(false);

  toggleDropdown(): void {
    this.dropdownOpen.set(!this.dropdownOpen());
  }

  closeDropdown(): void {
    this.dropdownOpen.set(false);
  }

  logout(): void {
    this.auth.logout();
    this.closeDropdown();
    this.router.navigate(['/login']);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-menu')) {
      this.closeDropdown();
    }
  }
}
