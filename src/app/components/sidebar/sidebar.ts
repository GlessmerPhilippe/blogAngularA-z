import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../search-box/search-box';
import { CategoryFilterComponent } from '../category-filter/category-filter';
import { TagsCloudComponent } from '../tags-cloud/tags-cloud';
import { ArticlesRelatedComponent } from '../articles-related/articles-related';
import { LoaderCategoriesSkeletonComponent } from '../../loaders/loader-categories-skeleton/loader-categories-skeleton';

import { Category, Tag } from '../../models/article.model'; // <- le bon model
import { CATEGORIES_MOCK } from '../../mocks/categories-mock';
import { TAGS_MOCK } from '../../mocks/tags-mock';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    CategoryFilterComponent,
    TagsCloudComponent,
    ArticlesRelatedComponent,
    LoaderCategoriesSkeletonComponent
  ],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Input() tags: Tag[] = [];
  @Input() article: any;

  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      // Si le parent n'a PAS fourni de catégories, on utilise le mock
      if (!this.categories.length) {
        this.categories = CATEGORIES_MOCK;
      }
      if (!this.tags.length) {
        this.tags = TAGS_MOCK;
      }
      this.isLoading = false;
    }, 1200);
  }
}
