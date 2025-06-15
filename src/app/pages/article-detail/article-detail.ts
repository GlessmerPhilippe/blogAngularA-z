import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// IMPORTS des composants enfants
import { ArticleContentComponent } from '../../components/article-content/article-content';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';
import { ArticleCommentsComponent } from '../../components/article-comments/article-comments';
import { LoaderArticleContentSkeletonComponent } from '../../loaders/loader-article-content-skeleton/loader-article-content-skeleton';
import { SidebarComponent } from '../../components/sidebar/sidebar';
import { ArticleNavigationComponent } from '../../components/article-navigation/article-navigation'; // AJOUT
import { ArticleService } from '../../services/article.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ArticleContentComponent,
    ProgressBarComponent,
    ArticleCommentsComponent,
    LoaderArticleContentSkeletonComponent,
    SidebarComponent,
    ArticleNavigationComponent, // AJOUT
  ],
  templateUrl: './article-detail.html',
  styleUrls: ['./article-detail.scss'],
})
export class ArticleDetailComponent implements OnInit {
  article?: Article ;
  previousArticle?: Article;
  nextArticle?: Article;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  // ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //     const id = params.get('id');
  //     this.isLoading = true;

  //     setTimeout(() => {
  //       const index = ARTICLES_MOCK.findIndex(a => a.id === id);
  //       this.article = ARTICLES_MOCK[index];

  //       // Navigation logique
  //       this.previousArticle = (index > 0) ? ARTICLES_MOCK[index - 1] : undefined;
  //       console.log('Previous Article:', this.previousArticle);
  //       console.log('Current Article:', this.article);
  //       this.nextArticle = (index < ARTICLES_MOCK.length - 1) ? ARTICLES_MOCK[index + 1] : undefined;
  //       console.log('Next Article:', this.nextArticle);
  //       console.log('Article loaded:', this.article);
  //       this.isLoading = false;
  //     }, 1000);
  //   });
  // }
    getFullUrl(path: string): string {
      return environment.url + path;
    }
  ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    const id = params.get('id');
    if (!id) return;

    this.isLoading = true;

    this.articleService.getById(+id).subscribe({
      next: (data) => {
        this.article = data;
        console.log('Article chargé:', this.article);

        this.articleService.getAll().subscribe({
          next: (res) => {
            const articles = res.articles;
            const index = articles.findIndex((a) => a.id === data.id);
            this.previousArticle = index > 0 ? articles[index - 1] : undefined;
            this.nextArticle = index < articles.length - 1 ? articles[index + 1] : undefined;
          }
        });
      },
      error: (err) => {
        console.error('Erreur de chargement de l’article', err);
        this.article = undefined;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  });
}
}
