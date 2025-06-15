// src/app/services/user.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private baseUrl = environment.url + environment.api.routes.users;

  /** Récupère tous les utilisateurs */
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  /** Récupère un utilisateur par ID */
  getById(id: number | string): Observable<{ success: boolean; data: User }> {
    return this.http.get<{ success: boolean; data: User }>(
      `${this.baseUrl}/${id}`
    );
  }

  /** Crée un nouvel utilisateur */
  create(data: Partial<User>): Observable<User> {
    const url = environment.api.base + environment.api.routes.register;
    return this.http.post<User>(url, data);
  }

  /** Met à jour un utilisateur existant */
  update(id: string, data: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, data);
  }

  /** Supprime un utilisateur */
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
