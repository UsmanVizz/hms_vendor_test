import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-expense-management',
  templateUrl: './expense-management.component.html',
  styleUrls: ['./expense-management.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ExpenseManagementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
