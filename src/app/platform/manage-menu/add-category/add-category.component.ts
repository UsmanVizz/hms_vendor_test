import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  uploadedImages: any[] = [];
  uploadedthumbnail:any[] =[];
    images = [
    { src: 'assets/images/img.jpg', alt: 'Description of image 1' },
    { src: 'assets/images/img.jpg', alt: 'Description of image 2' },
    { src: 'assets/images/img.jpg', alt: 'Description of image 3' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.uploadedImages.push({ name: file.name, url: e.target.result });
        };
        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(image: any) {
    const index = this.uploadedImages.indexOf(image);
    if (index !== -1) {
      this.uploadedImages.splice(index, 1);
    }
  }

  uploadImages() {
    console.log('Uploading images...');
    console.log(this.uploadedImages);
    this.uploadedImages = [];
  }

  onThumbnailSelected(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      this.uploadedthumbnail = [];
     const file: File = files[0];
      this.uploadImageAndGetURL(file).then((url: string) => {
         this.uploadedthumbnail.push({ name: file.name, url: url });
      event.target.value = '';
      }).catch((error: any) => {
        console.error('Error uploading image:', error);
       });
    }
  }
  
  removeThumbnail(image: any): void {
     console.log('log')
    const index: number = this.uploadedthumbnail.indexOf(image);
    if (index !== -1) {
      this.uploadedthumbnail.splice(index, 1);
    const fileUploadElement: HTMLInputElement | null = document.getElementById('thumbnail-upload') as HTMLInputElement;
      if (fileUploadElement) {
        fileUploadElement.value = ''; 
      }
    }
  }

  uploadImageAndGetURL(file: File): Promise<string> {
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
         const placeholderImageUrl: string = e.target.result;
        resolve(placeholderImageUrl);
      };
      reader.readAsDataURL(file);
    });
  }
}
