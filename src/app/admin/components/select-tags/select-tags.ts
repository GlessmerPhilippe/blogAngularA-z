import { Component, Input, Output, EventEmitter, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-tags',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select-tags.html',
})
export class SelectTagsComponent {
  @Input() allTags: string[] = [];
  @Input() selected: string[] = [];
  @Output() selectedChange = new EventEmitter<string[]>();

  inputValue = '';

  get filteredTags(): string[] {
    const input = this.inputValue.toLowerCase();
    return this.allTags.filter(tag =>
      tag.toLowerCase().includes(input) && !this.selected.includes(tag)
    );
  }

  addTag() {
  const value = this.inputValue.trim();
  if (value && !this.selected.includes(value)) {
    const updatedSelected = [...this.selected, value];
    this.selectedChange.emit(updatedSelected);

    // Si le tag est nouveau, on ajoute dans allTags (optionnel selon ton usage)
    if (!this.allTags.includes(value)) {
      this.allTags = [...this.allTags, value];
    }
  }
  this.inputValue = '';
}

removeTag(tag: string) {
  const updatedSelected = this.selected.filter(t => t !== tag);
  this.selectedChange.emit(updatedSelected);
}


  handleKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.addTag();
    }
  }
}
