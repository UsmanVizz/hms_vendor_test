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
  constructor() {}

  ngOnInit(): void {}
}
