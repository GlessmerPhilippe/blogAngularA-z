// src/app/services/category.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Tag } from '../models/article.model';


@Injectable({ providedIn: 'root' })
export class TagService {
  private readonly API_URL = environment.api.base + '/categories';

  constructor(private http: HttpClient) {}

  getAll(): Observable<{ data: Tag[] }> {
    return this.http.get<{ data: Tag[] }>(this.API_URL);
  }
  getAllPublic(): Observable<Tag[]> {
    return this.http
      .get<{ data: Tag[] }>(this.API_URL)
      .pipe(map((res) => res.data));
  }
}
