import { inject, Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';
import { ToastService } from './toast.service'; // adapte le chemin si besoin


interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  bio: string;
  isVerified: boolean;
  roles: string[];
}

interface AuthResponse {
  token: string;
  refreshToken: string;
  user: User;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.api.base}${environment.api.routes.login}`;

  // ✅ Signal pour suivre l'utilisateur courant
  private userSignal = signal<User | null>(this.getStoredUser());
  toast = inject(ToastService);
  // ✅ Login
  login(credentials: LoginPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiUrl, credentials).pipe(
      tap((response) => {
        localStorage.setItem('jwt_token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.userSignal.set(response.user);
      })
    );
  }

  logout() {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('user');
    this.toast.show('👋 Vous avez été déconnecté.', 'info'); // ✅ Ajout du toast
    this.userSignal.set(null);

  }

  // ✅ Getter direct du signal (réactif)
  getUser = () => this.userSignal();

  // ✅ Setter manuel (utile au démarrage app)
  setUser(user: User) {
    this.userSignal.set(user);
  }

  // ✅ Pour restaurer depuis localStorage
  private getStoredUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public getCurrentUser(): AuthResponse['user'] | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
