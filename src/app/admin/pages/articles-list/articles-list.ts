import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ARTICLES_MOCK } from '../../../mocks/articles-mock';

@Component({
  selector: 'admin-articles-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './articles-list.html',
})
export class ArticlesList {
  articles = ARTICLES_MOCK;

  get stats() {
    return {
      published: this.articles.filter(a => a.status === 'published').length,
      draft: this.articles.filter(a => a.status === 'draft').length,
      pending: this.articles.filter(a => a.status === 'pending').length,
      comments: this.articles.reduce((acc, a) => acc + (a.commentCount || 0), 0)
    };
  }
}
