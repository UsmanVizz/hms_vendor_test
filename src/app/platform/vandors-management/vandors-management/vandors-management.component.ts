import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-vandors-management',
  templateUrl: './vandors-management.component.html',
  styleUrls: ['./vandors-management.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class VandorsManagementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
