import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../../models/article.model';
import { ARTICLES_MOCK } from '../../mocks/articles-mock';
import { RouterModule } from '@angular/router';
import { LoaderArticlesRelatedSkeletonComponent } from '../../loaders/loader-articles-related-skeleton/loader-articles-related-skeleton';

@Component({
  selector: 'app-articles-related',
  standalone: true,
  imports: [CommonModule,  RouterModule, LoaderArticlesRelatedSkeletonComponent],
  templateUrl: './articles-related.html',
  styleUrls: ['./articles-related.scss']
})
export class ArticlesRelatedComponent implements OnInit {
  @Input() article!: Article;
  related: Article[] = [];
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.related = this.getRelatedArticles();
      this.isLoading = false;
    }, 1000);
  }

  getRelatedArticles(): Article[] {
    if (!this.article) return [];
    // Simple matching : au moins 1 catégorie ou 1 tag commun, mais pas l’article lui-même
    return ARTICLES_MOCK
      .filter(a => a.id !== this.article.id)
      .filter(a =>
        a.categories.some(cat => this.article.categories.map(c => c.id).includes(cat.id)) ||
        a.tags.some(tag => this.article.tags.map(t => t.id).includes(tag.id))
      )
      .slice(0, 4); // max 4 articles similaires
  }
}
