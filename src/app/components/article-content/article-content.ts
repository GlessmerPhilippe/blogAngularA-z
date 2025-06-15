import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ShareComponent } from '../share/share';
import { PlatformLocation } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-article-content',
  standalone: true,
  imports: [CommonModule, ShareComponent],
  templateUrl: './article-content.html',
  styleUrls: ['./article-content.scss'],
})
export class ArticleContentComponent {
  @Input() article?: Article;
  urlDeLArticle: string = '';
  constructor(
    private sanitizer: DomSanitizer,
    private location: PlatformLocation
  ) {
    this.urlDeLArticle = window.location.origin + this.location.pathname;
  }

  getYoutubeEmbedUrl(url: string): SafeResourceUrl {
    // Regex propre et non échappée inutilement
    const match = url.match(
      /(?:youtube\.com.*[?&]v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    if (match && match[1]) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${match[1]}`
      );
    }
    return '';
  }

  getVimeoEmbedUrl(url: string): SafeResourceUrl {
    const match = url.match(/vimeo\.com\/(\d+)/);
    if (match && match[1]) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://player.vimeo.com/video/${match[1]}`
      );
    }
    return '';
  }
  selectedImage: string | null = null;

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
  getFullUrl(path: string): string {
    return environment.url + path;
  }
}
