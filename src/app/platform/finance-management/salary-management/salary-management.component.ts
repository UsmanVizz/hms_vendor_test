import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-salary-management',
  templateUrl: './salary-management.component.html',
  styleUrls: ['./salary-management.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SalaryManagementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
