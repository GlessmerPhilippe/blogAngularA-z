import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Article } from '../../models/article.model';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, NgIf, RouterModule],
  templateUrl: './article-card.html',
  styleUrls: ['./article-card.scss'],
})
export class ArticleCardComponent {
  @Input() article!: Article;
  getFullUrl(path: string): string {
    return environment.url + path;
  }
}
