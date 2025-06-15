// src/app/admin/pages/users/user-form/user-form.ts
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user.model';
import { ArticleService } from '../../../../services/article.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './user-form.html',
})
export class UserForm implements OnInit {
  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  private route = inject(ActivatedRoute);
  public router = inject(Router);
  allRoles = ['ROLE_ADMIN', 'ROLE_AUTHOR', 'ROLE_USER'];
  form!: FormGroup;
  userId?: string;
  isEditMode = false;
  loading = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      pseudo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      avatar: [''],
      password: [''], // laissé vide si modification
      roles: [[]],
      isActive: [true],
    });

    this.userId = this.route.snapshot.paramMap.get('id') ?? undefined;
    if (this.userId) {
      this.isEditMode = true;
      this.loadUser(this.userId);
    }
  }

  loadUser(id: string): void {
    this.loading = true;
    this.userService.getById(id).subscribe({
      next: (response) => {
        const user = response.data; // ✅ extraire l'objet utilisateur depuis "data"
        console.log('User fetched:', user);

        this.form.patchValue({
          firstName: user.firstName,
          lastName: user.lastName,
          pseudo: user.pseudo,
          email: user.email,
          avatar: user.avatar || '',
          roles: user.roles || [],
          isActive: user.isVerified ?? true,
        });
      },
      error: () => alert("❌ Erreur lors du chargement de l'utilisateur."),
      complete: () => (this.loading = false),
    });
  }
onRoleChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  const roles = this.form.get('roles')?.value ?? [];
  if (input.checked) {
    this.form.get('roles')?.setValue([...roles, input.value]);
  } else {
    this.form.get('roles')?.setValue(roles.filter((r: string) => r !== input.value));
  }
}
  submit(): void {
    if (this.form.invalid) return;

    const userData = this.form.value;
    this.loading = true;

    const saveAction =
      this.isEditMode && this.userId
        ? this.userService.update(this.userId, userData)
        : this.userService.create(userData);

    saveAction.subscribe({
      next: () => this.router.navigate(['/admin/users']),
      error: () => alert('❌ Erreur lors de la sauvegarde.'),
      complete: () => (this.loading = false),
    });
  }
}
