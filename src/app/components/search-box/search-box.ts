import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARTICLES_MOCK } from '../../mocks/articles-mock';
import { RouterModule } from '@angular/router';
import { Article } from '../../models/article.model';
import { LoaderSearchResults } from '../../loaders/loader-search-results/loader-search-results';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, RouterModule, LoaderSearchResults,],
  templateUrl: './search-box.html',
  styleUrls: ['./search-box.scss']

})
export class SearchBoxComponent {
  query = '';
  results: Article[] = []; 
  isLoading = false;

  search() {
    this.isLoading = true;
    setTimeout(() => {
      this.results = this.query.length
        ? ARTICLES_MOCK.filter(a =>
            a.title.toLowerCase().includes(this.query.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(this.query.toLowerCase())
          )
        : [];
      this.isLoading = false;
    }, 1400);
  }

  onInput(e: any) {
    this.query = e.target.value;
    this.search();
  }
}
