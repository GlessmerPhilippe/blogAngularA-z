import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule,
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
      multi: true,
    },
  ],
})
export class ImageGalleryUploadComponent implements ControlValueAccessor {
  @Input() aspectRatio: number = 16 / 9;
  @Input() images: {
    base64: string;
    file: File;
    cropped?: boolean;
    isFeatured?: boolean;
  }[] = [];

  cropping = false;
  imageChangedEvent: any = '';
  croppedImage: string = '';

  private onChange = (val: any) => {};
  private onTouched = () => {};

  writeValue(value: any): void {
    this.images = value ? [...value] : [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // 📤 Zone multiple (sans crop)
  onMultipleFiles(event: any): void {
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

  // ✂️ Zone individuelle avec crop
onSingleFile(event: any) {
  this.cropping = true;
  setTimeout(() => {
    this.imageChangedEvent = event;
  }, 0); // laisse le temps à Angular d'afficher le composant
}

imageCropped(event: ImageCroppedEvent) {
  console.log('✅ imageCropped triggered');
  console.log('🧬 event =', event);

  if (event.base64) {
    this.croppedImage = event.base64;
    console.log('📸 croppedImage OK, longueur :', this.croppedImage.length);
  } else if (event.blob) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.croppedImage = reader.result as string;
      console.log('📸 croppedImage (depuis blob) OK');
    };
    reader.readAsDataURL(event.blob);
  } else {
    console.warn('❌ Aucun base64 ni blob généré par le cropper');
  }
}


  validateCrop() {
    console.log('🧪 Validation en cours');
    console.log('📷 croppedImage:', this.croppedImage);
    console.log('🖼️ imageChangedEvent:', this.imageChangedEvent);

    if (!!this.croppedImage?.length) {
      const newImage = {
        base64: this.croppedImage,
        file: new File([], 'cropped.png'),
        cropped: true,
        isFeatured: false,
      };
      console.log('✅ New image object:', newImage);
      this.images.push(newImage);
      this.onChange([...this.images]);
    } else {
      console.warn(
        '⛔ Aucun recadrage détecté. Vérifie que l’image est bien chargée.'
      );
    }

    this.cancelCrop();
  }

  cancelCrop() {
    this.cropping = false;
    this.imageChangedEvent = '';
    this.croppedImage = '';
  }

  removeImage(i: number) {
    this.images.splice(i, 1);
    this.onChange(this.images);
  }

  setAsFeatured(i: number) {
    this.images = this.images.map((img, index) => ({
      ...img,
      isFeatured: index === i,
    }));
    this.onChange(this.images);
  }

  isFeatured(i: number) {
    return this.images[i]?.isFeatured;
  }
}
