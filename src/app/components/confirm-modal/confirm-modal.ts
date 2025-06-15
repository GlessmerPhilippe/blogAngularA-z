import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-modal.html',
})
export class ConfirmModalComponent {
  @Input() title = 'Confirmer';
  @Input() message = 'Êtes-vous sûr ?';
  @Input() confirmText = 'Oui';
  @Input() cancelText = 'Annuler';
  @Input() show = false;

  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  confirm() {
    this.confirmed.emit();
    this.show = false;
  }

  cancel() {
    this.cancelled.emit();
    this.show = false;
  }
}
