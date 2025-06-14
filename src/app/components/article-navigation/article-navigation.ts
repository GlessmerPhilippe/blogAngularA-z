import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-article-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-navigation.html',
  styleUrls: ['./article-navigation.scss']
})
export class ArticleNavigationComponent {
  @Input() previous?: Article;
  @Input() next?: Article;
}
