import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-menu',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent {
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
}

