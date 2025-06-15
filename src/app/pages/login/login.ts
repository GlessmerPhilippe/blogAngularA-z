import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage = '';
  loading = false;

  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private toast = inject(ToastService) as ToastService;

  constructor() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.toast.show('🔁 Vous êtes déjà connecté, redirection...', 'info'); // ✅ Toast ajouté ici aussi
      this.router.navigate(['/'], {
        state: { alreadyConnected: true },
      });
    }
  }

  submit(): void {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;
    if (!email || !password) {
      this.errorMessage = 'Veuillez remplir tous les champs.';
      return;
    }

    this.loading = true;

    this.auth.login({ email, password }).subscribe({
      next: () => {
        this.toast.show('✅ Vous venez d’être connecté.', 'success'); // ✅ Toast de succès
        this.router.navigate(['/']);
      },
      error: () => {
        this.errorMessage = 'Identifiants invalides.';
        this.loading = false;
      },
    });
  }
}
