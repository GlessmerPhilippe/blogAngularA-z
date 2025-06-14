import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-0 left-0 w-full z-40 h-1 bg-gray-200">
      <div class="h-1 bg-blue-500 transition-all duration-200" [style.width.%]="progress"></div>
    </div>
  `,
})
export class ProgressBarComponent {
  @Input() article?: any;
  progress = 0;

  @HostListener('window:scroll', [])
  onScroll() {
    const el = document.documentElement;
    const scrollTop = window.scrollY || el.scrollTop;
    const scrollHeight = el.scrollHeight - el.clientHeight;
    this.progress = scrollHeight ? Math.min(100, (scrollTop / scrollHeight) * 100) : 0;
  }
}
