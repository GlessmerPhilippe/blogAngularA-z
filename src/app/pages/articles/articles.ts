import { Component } from '@angular/core';
import { CommonModule, NgIf, NgForOf } from '@angular/common';
import { ArticleCardComponent } from '../../components/article-card/article-card';
import { LoaderSkeleton } from '../../shared/loader-skeleton/loader-skeleton';
import { ARTICLES_MOCK } from '../../mocks/articles-mock'; // Crée ce fichier pour tes mocks

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, NgIf, NgForOf, ArticleCardComponent, LoaderSkeleton],
  templateUrl: './articles.html',
  styleUrls: ['./articles.scss']
})
export class ArticlesComponent {
  isLoading = true;
  articles = ARTICLES_MOCK;

  constructor() {
    setTimeout(() => this.isLoading = false, 1200); // Simule le chargement
  }
  skeletonCount = 12; // ou le nombre d’articles attendus
  get skeletonArray() {
    return Array(this.skeletonCount);
  }
}
