import { Component } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  template: `
    <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
      <div class="text-sm text-gray-400">{{ label }}</div>
      <div class="text-2xl font-bold">{{ value }}</div>
    </div>
  `,
  inputs: ['label', 'value']
})
export class StatCardComponent {
  label!: string;
  value!: string | number;
}
