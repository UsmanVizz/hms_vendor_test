import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-hall',
  templateUrl: './add-hall.component.html',
  styleUrls: ['./add-hall.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AddHallComponent implements OnInit {
  images = [
    { src: 'assets/images/img.jpg', alt: 'Description of image 1' },
    { src: 'assets/images/img.jpg', alt: 'Description of image 2' },
    { src: 'assets/images/img.jpg', alt: 'Description of image 3' },
  ];
  title: string;
  description: string;
  uploadedImages: any[] = [];
  constructor() {
    this.title = '';
    this.description = '';
  }
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
}
