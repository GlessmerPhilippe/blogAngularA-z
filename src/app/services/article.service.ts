import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Article ,ArticleResponse} from '../models/article.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly API_URL = environment.url + environment.api.routes.articles;

  constructor(private http: HttpClient) {}

  // ✅ CREATE
  create(article: Partial<Article>): Observable<Article> {
    return this.http.post<Article>(this.API_URL, article);
  }

  // ✅ GET by ID - retourne directement un Article
  getById(id: number): Observable<Article> {
    return this.http.get<{ success: boolean; data: Article }>(`${this.API_URL}/${id}`).pipe(
      map(res => res.data)
    );
  }

  // ✅ GET all (liste avec pagination/filtrage)
  getAll(params?: { [key: string]: any }): Observable<{ articles: Article[]; total: number }> {
    let httpParams = new HttpParams();
    if (params) {
      for (let key in params) {
        if (params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }

    return this.http
      .get<{ success: boolean; data: { articles: Article[]; total: number } }>(this.API_URL, {
        params: httpParams
      })
      .pipe(map(res => res.data));
  }

  // ✅ UPDATE
  update(id: number, article: Partial<Article>): Observable<Article> {
    return this.http.put<Article>(`${this.API_URL}/${id}`, article);
  }

  // ✅ DELETE
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
