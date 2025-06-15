import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService, Category } from '../../../services/category.service';

@Component({
  selector: 'app-select-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-categories.html',
})
export class SelectCategoriesComponent implements OnInit {
  @Input() selected: Category[] = [];
  @Output() selectedChange = new EventEmitter<Category[]>();

  categories: Category[] = [];

  private categoryService = inject(CategoryService);

  ngOnInit() {
    this.categoryService.getAll().subscribe((response) => {
      this.categories = response ?? []; // ✅ on accède à .data
    });
  }

  isSelected(cat: Category): boolean {
    return this.selected.some((c) => c.id === cat.id);
  }

  onSelectionChange(event: Event) {
    const selectedOptions = (event.target as HTMLSelectElement).selectedOptions;
    const selectedIds = Array.from(selectedOptions).map((opt) =>
      parseInt(opt.value, 10)
    );
    const selectedCategories = this.categories.filter((cat) =>
      selectedIds.includes(cat.id)
    );
    this.selected = selectedCategories;
    this.selectedChange.emit(this.selected);
  }
}
