import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './article-card.html',
  styleUrls: ['./article-card.scss']
})
export class ArticleCardComponent {
  @Input() article!: Article;
}
