import { Component, computed, effect, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { ImageUploadComponent } from '../../components/image-upload/image-upload.component'; // adapte le chemin
import { ImageGalleryUploadComponent } from '../../components/image-gallery-dual-upload/image-gallery-upload.component'; // adapte le chemin
import { VideoComponent } from '../../components/video/video'; // adapte le chemin selon le nom réel du composant
import { SelectCategoriesComponent } from '../../components/select-categories/select-categories'; // adapte le chemin
import { SelectTagsComponent } from '../../components/select-tags/select-tags'; // adapte le chemin
import { EtatComponent } from '../../components/etat/etat'; // adapte le chemin
import { SaveButtonComponent } from '../../components/save-button.component/save-button.component'; // adapte le chemin
import { ArticleService } from '../../../services/article.service'; // adapte le chemin


@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuillModule,
    ImageGalleryUploadComponent,
    VideoComponent,
    SelectCategoriesComponent,
    SelectTagsComponent,
    EtatComponent,
    SaveButtonComponent,
  ],
  templateUrl: './article-form.html',
})
export class ArticleForm {
  private fb = inject(FormBuilder);
  private articleService = inject(ArticleService);
  form: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    slug: [{ value: '', disabled: true }],
    excerpt: ['', Validators.required],
    content: ['', Validators.required],
    featuredImage: [null],
    images: [[]],
    videos: [[]],
    categories: [[]],
    tags: [[]],
    status: ['draft'],
    isPublished: [false],
    publishedAt: [null],
  });

  constructor() {
    // Génération automatique du slug depuis le titre
    effect(() => {
      const title = this.form.get('title')?.value;
      if (title) {
        const generatedSlug = title
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');

        this.form.get('slug')?.setValue(generatedSlug, { emitEvent: false });
      }
    });
  }

  isSubmitting = false;

submitForm() {
  if (this.form.invalid) return;

  this.isSubmitting = true;
  const articleData = this.form.getRawValue();

  this.articleService.create(articleData).subscribe({
    next: (res) => {
      console.log('✅ Article créé :', res);
      this.isSubmitting = false;
      // Tu peux faire une redirection ou un toast ici
    },
    error: (err) => {
      console.error('❌ Erreur lors de la création :', err);
      this.isSubmitting = false;
    },
  });
}
}
