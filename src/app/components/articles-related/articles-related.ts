import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';
import { LoaderArticlesRelatedSkeletonComponent } from '../../loaders/loader-articles-related-skeleton/loader-articles-related-skeleton';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-articles-related',
  standalone: true,
  imports: [CommonModule, RouterModule, LoaderArticlesRelatedSkeletonComponent],
  templateUrl: './articles-related.html',
  styleUrls: ['./articles-related.scss'],
})
export class ArticlesRelatedComponent {
  private _article!: Article;

  @Input() set article(value: Article) {
    if (!value) return;

    console.log('🟢 Article injecté après initialisation :', value);
    this._article = value;
    this.loadRelatedArticles();
  }

  related: Article[] = [];
  isLoading = true;

  private articleService = inject(ArticleService);

  private loadRelatedArticles() {
    this.isLoading = true;

    this.articleService.getAll({ isPublished: true }).subscribe({
      next: (response) => {
        const allArticles = response.articles;
        console.log('✅ Articles récupérés :', allArticles);
        this.related = this.getRelatedArticles(allArticles);
        this.isLoading = false;
      },
      error: () => {
        console.error('❌ Erreur de chargement des articles liés.');
        this.related = [];
        this.isLoading = false;
      },
    });
  }

  private getRelatedArticles(allArticles: Article[]): Article[] {
    const currentCats = this._article.categories?.map((c) => c.id) ?? [];
    const currentTags = this._article.tags?.map((t) => t.id) ?? [];

    return allArticles
      .filter((a) => a.id !== this._article.id)
      .filter((a) => {
        const aCats = a.categories?.map((c) => c.id) ?? [];
        const aTags = a.tags?.map((t) => t.id) ?? [];

        return (
          aCats.some((catId) => currentCats.includes(catId)) ||
          aTags.some((tagId) => currentTags.includes(tagId))
        );
      })
      .slice(0, 8); // ✅ On prend jusqu’à 8 articles similaires
  }

  getFullUrl(path: string): string {
    return environment.url + path;
  }
}
