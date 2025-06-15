import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-save-button',
  standalone: true,
  templateUrl: './save-button.component.html',
  imports: [CommonModule],
})
export class SaveButtonComponent {
  @Input() loading = false;
  @Input() label = 'Enregistrer';
  @Input() disabled = false;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled && !this.loading) {
      this.clicked.emit();
    }
  }
}
