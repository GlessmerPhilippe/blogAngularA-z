import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-gallery-upload',
  standalone: true,
  imports: [CommonModule, FormsModule, ImageCropperComponent],
  templateUrl: './image-gallery-upload.component.html',
  styleUrls: ['./image-gallery-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageGalleryUploadComponent),
      multi: true
    }
  ]
})
export class ImageGalleryUploadComponent implements ControlValueAccessor {
  @Input() aspectRatio: number = 16 / 9;
  @Input() images: { base64: string; file: File; cropped?: boolean; isFeatured?: boolean }[] = [];
  @Input() featuredImage: string | null = null;

  croppingIndex: number | null = null;
  imageChangedEvent: any = '';
  croppedImage: string = '';

  private onChange = (val: any) => {};
  private onTouched = () => {};

  writeValue(value: any): void {
    this.images = value || [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onFileChange(event: any): void {
    const files = event.target.files;
    for (let file of files) {
      const reader = new FileReader();
      reader.onload = () => {
        this.images.push({ base64: reader.result as string, file });
        this.onChange(this.images);
      };
      reader.readAsDataURL(file);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer?.files?.length) {
      const files = Array.from(event.dataTransfer.files);
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = () => {
          this.images.push({ base64: reader.result as string, file });
          this.onChange(this.images);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(i: number) {
    this.images.splice(i, 1);
    this.onChange(this.images);
  }

  setAsFeatured(i: number) {
    this.featuredImage = this.images[i].base64;
    this.images = this.images.map((img, index) => ({
      ...img,
      isFeatured: index === i
    }));
    this.onChange(this.images);
  }

  startCropping(i: number) {
    this.croppingIndex = i;
    this.imageChangedEvent = null;
  }

  fileInputChange(event: any) {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    if (!event.base64) return;
    this.croppedImage = event.base64;
  }

  confirmCrop() {
    if (this.croppingIndex !== null && this.croppedImage) {
      this.images[this.croppingIndex].base64 = this.croppedImage;
      this.images[this.croppingIndex].cropped = true;
      this.onChange(this.images);
    }
    this.closeCropper();
  }

  closeCropper() {
    this.croppingIndex = null;
    this.imageChangedEvent = '';
    this.croppedImage = '';
  }
}
