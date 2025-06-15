import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private counter = 0;
  toasts = signal<Toast[]>([]);

  show(message: string, type: Toast['type'] = 'info') {
    const id = ++this.counter;
    this.toasts.update((prev) => [...prev, { id, message, type }]);

    setTimeout(() => this.dismiss(id), 4000); // disparaît après 4s
  }

  dismiss(id: number) {
    this.toasts.update((toasts) => toasts.filter(t => t.id !== id));
  }
}
