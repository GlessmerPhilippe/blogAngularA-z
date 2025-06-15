// src/app/components/video/video.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ArticleVideo {
  url: string;
  title: string;
  provider: 'youtube' | 'vimeo' | 'other';
}

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './video.html',
  styleUrls: ['./video.scss']
})
export class VideoComponent {
  @Input() videos: ArticleVideo[] = [];
  @Output() videosChange = new EventEmitter<ArticleVideo[]>();

  url = '';

  addVideo() {
    const provider = this.detectProvider(this.url);
    const title = this.extractTitle(this.url);

    if (!provider) return;

    this.videos.push({ url: this.url, title, provider });
    this.videosChange.emit(this.videos);
    this.url = '';
  }

  removeVideo(i: number) {
    this.videos.splice(i, 1);
    this.videosChange.emit(this.videos);
  }

  private detectProvider(url: string): ArticleVideo['provider'] | null {
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('vimeo.com')) return 'vimeo';
    return 'other';
  }

  private extractTitle(url: string): string {
    try {
      const u = new URL(url);
      return u.hostname;
    } catch {
      return 'Lien';
    }
  }
}
