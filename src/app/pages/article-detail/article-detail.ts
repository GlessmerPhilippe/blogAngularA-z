import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARTICLES_MOCK } from '../../mocks/articles-mock';
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
    ArticleNavigationComponent // AJOUT
  ],
  templateUrl: './article-detail.html',
  styleUrls: ['./article-detail.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: Article | undefined;
  previousArticle?: Article;
  nextArticle?: Article;
  isLoading = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.isLoading = true;

      setTimeout(() => {
        const index = ARTICLES_MOCK.findIndex(a => a.id === id);
        this.article = ARTICLES_MOCK[index];

        // Navigation logique
        this.previousArticle = (index > 0) ? ARTICLES_MOCK[index - 1] : undefined;
        console.log('Previous Article:', this.previousArticle);
        console.log('Current Article:', this.article);
        this.nextArticle = (index < ARTICLES_MOCK.length - 1) ? ARTICLES_MOCK[index + 1] : undefined;
        console.log('Next Article:', this.nextArticle);
        console.log('Article loaded:', this.article);
        this.isLoading = false;
      }, 1000);
    });
  }
}
