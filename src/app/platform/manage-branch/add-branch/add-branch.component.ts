import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add-branch',
  standalone: true,
  imports: [CommonModule, FormsModule,ButtonModule],
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss'],

})
export class AddBranchComponent {
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
