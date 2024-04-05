import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-category',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  images = [
    { src: 'assets/images/img.jpg', alt: 'Description of image 1' },
    { src: 'assets/images/img.jpg', alt: 'Description of image 2' },
    { src: 'assets/images/img.jpg', alt: 'Description of image 3' },
  ];
  title: string;
  description: string;

  constructor() {
    this.title = '';
    this.description = '';
  }
  ngOnInit(): void {}
}
