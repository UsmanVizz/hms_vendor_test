import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ManageCustomersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
