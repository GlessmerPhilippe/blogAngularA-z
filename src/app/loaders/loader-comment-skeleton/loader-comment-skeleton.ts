import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader-comment-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex gap-3 items-start mb-4 animate-pulse">
      <div class="w-10 h-10 rounded-full bg-gray-200"></div>
      <div class="flex-1 space-y-2">
        <div class="h-4 w-1/3 bg-gray-200 rounded"></div>
        <div class="h-3 w-2/3 bg-gray-200 rounded"></div>
        <div class="h-3 w-1/2 bg-gray-200 rounded"></div>
      </div>
    </div>
  `
})
export class LoaderCommentSkeletonComponent {}
