import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-branch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss'],

})
export class AddBranchComponent {
  title: string;
  description: string;

  constructor() {
    this.title = '';
    this.description = '';
  }
}
