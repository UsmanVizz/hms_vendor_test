import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class AddBranchComponent implements OnInit {

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
