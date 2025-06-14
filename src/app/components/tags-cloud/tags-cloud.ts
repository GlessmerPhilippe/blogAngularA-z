import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags-cloud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags-cloud.html',

})
export class TagsCloudComponent {
  @Input() tags: any[] = [];
  @Output() selected = new EventEmitter<any>();
  select(tag: any) {
    this.selected.emit(tag);
  }
}
