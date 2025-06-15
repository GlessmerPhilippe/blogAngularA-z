import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  private toastService = inject(ToastService);
  toasts = this.toastService.toasts;

  readonly _trackToasts = effect(() => {
    this.toasts(); // déclenche les mises à jour
  });

  dismiss(id: number) {
    this.toastService.dismiss(id); // ✅ correction ici
  }
}
