import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class DealsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
