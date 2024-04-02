import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-manage-hall',
  templateUrl: './manage-hall.component.html',
  styleUrls: ['./manage-hall.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, PaginatorModule],
})
export class ManageHallComponent implements OnInit {
  first: number = 0;

  rows: number = 10;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
  cardData = [
    {
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
        'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering...',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
    },
    {
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
        'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering...',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
    },
    {
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
        'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering...',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
    },
    {
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
        'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering...',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
    },
    {
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
        'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering...',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
    },
    {
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
        'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering...',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
    },
    {
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
        'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering...',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
    },
    {
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
        'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering...',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
    },
    {
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
        'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering...',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
    },
    {
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
        'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering...',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
    },
    {
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
        'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering...',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
    },
    {
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
        'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering...',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
    },
  ];
  constructor(private router: Router) {}
  ngOnInit(): void {}

  navigateToAddHall() {
    this.router.navigate(['hms-main/add-hall']);
  }
}
