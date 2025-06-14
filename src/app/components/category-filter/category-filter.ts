import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/article.model';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-filter.html',
  styleUrls: ['./category-filter.scss']
})
export class CategoryFilterComponent {
  @Input() categories: Category[] = [];
  @Output() selected = new EventEmitter<Category>();

  select(cat: Category) {
    this.selected.emit(cat);
  }
}
