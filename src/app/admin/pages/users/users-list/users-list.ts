import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user.model';
import { FormsModule } from '@angular/forms';
import { ConfirmModalComponent } from '../../../../components/confirm-modal/confirm-modal';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ConfirmModalComponent],
  templateUrl: './users-list.html',
})
export class UsersList {
  private userService = inject(UserService);

  users = signal<User[]>([]);
  searchTerm = signal('');
  selectedRole = signal<string | null>(null);
  loading = signal(false);

  // Tri dynamique
  sortColumn = signal<'name' | 'email' | 'roles' | 'isVerified' | null>(null);
  sortDirection = signal<'asc' | 'desc'>('asc');

  filteredUsers = computed(() => {
    let result = [...this.users()];

    // 🔍 Filtrage par recherche
    const search = this.searchTerm().toLowerCase();
    if (search) {
      result = result.filter(user =>
        `${user.firstName} ${user.lastName} ${user.email}`
          .toLowerCase()
          .includes(search)
      );
    }

    // 🎯 Filtrage par rôle
    if (this.selectedRole()) {
      result = result.filter(user => user.roles.includes(this.selectedRole()!));
    }

    // ↕️ Tri
    const column = this.sortColumn();
    const direction = this.sortDirection();

    if (column) {
      result.sort((a, b) => {
        let valA: any, valB: any;

        switch (column) {
          case 'name':
            valA = `${a.lastName} ${a.firstName}`.toLowerCase();
            valB = `${b.lastName} ${b.firstName}`.toLowerCase();
            break;
          case 'email':
            valA = a.email.toLowerCase();
            valB = b.email.toLowerCase();
            break;
          case 'roles':
            valA = a.roles.join(',').toLowerCase();
            valB = b.roles.join(',').toLowerCase();
            break;
          case 'isVerified':
            valA = a.isVerified ? 1 : 0;
            valB = b.isVerified ? 1 : 0;
            break;
        }

        if (valA < valB) return direction === 'asc' ? -1 : 1;
        if (valA > valB) return direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  });

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading.set(true);
    this.userService.getAll().subscribe({
      next: (data) => this.users.set(data),
      error: () => alert('Erreur lors du chargement des utilisateurs'),
      complete: () => this.loading.set(false),
    });
  }

  clearFilters(): void {
    this.searchTerm.set('');
    this.selectedRole.set(null);
  }

  toggleSort(column: 'name' | 'email' | 'roles' | 'isVerified') {
    if (this.sortColumn() === column) {
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortColumn.set(column);
      this.sortDirection.set('asc');
    }
  }

  // 🔐 Suppression avec modale
  modalVisible = false;
  userToDelete?: User;

  openConfirmModal(user: User) {
    this.userToDelete = user;
    this.modalVisible = true;
  }

  onConfirmDelete() {
    if (!this.userToDelete) return;
    this.userService.delete(this.userToDelete.id).subscribe(() => {
      this.users.set(this.users().filter(u => u.id !== this.userToDelete!.id));
      this.modalVisible = false;
    });
  }

  deleteUser(user: User) {
    this.openConfirmModal(user);
  }
}
