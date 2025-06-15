import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etat.html',
})
export class EtatComponent {
  @Input() value: string = 'draft';
  @Output() valueChange = new EventEmitter<string>();

  options = [
    { label: '📝 Brouillon', value: 'draft', color: 'bg-gray-200' },
    { label: '✅ Publié', value: 'published', color: 'bg-green-200' },
    { label: '⏳ En attente', value: 'pending', color: 'bg-yellow-200' },
  ];

  setValue(val: string) {
    this.value = val;
    this.valueChange.emit(val);
  }

  isSelected(val: string): boolean {
    return this.value === val;
  }
  getButtonClasses(option: any): string {
  return this.isSelected(option.value)
    ? 'border-blue-600 text-white bg-blue-600'
    : `text-gray-700 ${option.color}`;
}
}
