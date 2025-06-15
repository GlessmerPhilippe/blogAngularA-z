import { Component, inject } from '@angular/core';
import { CommonModule, NgIf, NgForOf } from '@angular/common';
import { ArticleCardComponent } from '../../components/article-card/article-card';
import { LoaderSkeleton } from '../../shared/loader-skeleton/loader-skeleton';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, NgIf, NgForOf, ArticleCardComponent, LoaderSkeleton],
  templateUrl: './articles.html',
  styleUrls: ['./articles.scss']
})
export class ArticlesComponent {
  private articleService = inject(ArticleService);

  articles: Article[] = [];
  isLoading = true;

  skeletonCount = 12;
  get skeletonArray() {
    return Array(this.skeletonCount);
  }

  ngOnInit(): void {
    this.articleService.getAll({ isPublished: true }).subscribe({
      next: (response) => {
         this.articles = response.articles; // 👈 utiliser "articles" et non "data"
      },
      error: () => {
        console.error('Erreur lors du chargement des articles.');
        this.articles = [];
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
