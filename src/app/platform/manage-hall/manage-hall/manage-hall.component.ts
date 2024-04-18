import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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
  imports: [CommonModule],
})
export class ManageHallComponent implements OnInit {
  first: number = 0;

  currentIndex = 0;

  rows: number = 10;
  category: any;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
  cardData = [
    {
      id: 1,
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
        'Lorem Ipsum is simply dummy text of the on printing and typesetting industry. Lorem ikj Ipsum has been the industrys standard ',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city: 'Islamabad',
      area: '2000 sq ft',
      capacity: '500',
      attraction: 'Park,Garden and Play Area',
      map: 'https://maps.app.goo/',
      address: '6th road',
      owner: 'hammad khan',
    },
    {
      id: 2,
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
        'Lorem Ipsum is simply dummy text of the on printing and typesetting industry. Lorem Ipsum has been the industrys standard ',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city: 'Islamabad',
      area: '2000 sq ft',
      capacity: '500',
      attraction: 'Park,Garden and Play Area',
      map: 'https://maps.app.goo/',
      address: '6th road',
      owner: 'hammad khan',
    },
    {
      id: 3,
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard ',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city: 'Islamabad',
      area: '2000 sq ft',
      capacity: '500',
      attraction: 'Park,Garden and Play Area',
      map: 'https://maps.app.goo/',
      address: '6th road',
      owner: 'hammad khan',
    },
    {
      id: 4,
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard ',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city: 'Islamabad',
      area: '2000 sq ft',
      capacity: '500',
      attraction: 'Park,Garden and Play Area',
      map: 'https://maps.app.goo/',
      address: '6th road',
      owner: 'hammad khan',
    },
    {
      id: 5,
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard ',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city: 'Islamabad',
      area: '2000 sq ft',
      capacity: '500',
      attraction: 'Park,Garden and Play Area',
      map: 'https://maps.app.goo/',
      address: '6th road',
      owner: 'hammad khan',
    },
    {
      id: 6,
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard ',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city: 'Islamabad',
      area: '2000 sq ft',
      capacity: '500',
      attraction: 'Park,Garden and Play Area',
      map: 'https://maps.app.goo/',
      address: '6th road',
      owner: 'hammad khan',
    },
    {
      id: 7,
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard ',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city: 'Islamabad',
      area: '2000 sq ft',
      capacity: '500',
      attraction: 'Park,Garden and Play Area',
      map: 'https://maps.app.goo/',
      address: '6th road',
      owner: 'hammad khan',
    },
    {
      id: 8,
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard  ',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      iconClass: 'contract',
      city: 'Islamabad',
      area: '2000 sq ft',
      capacity: '500',
      attraction: 'Park,Garden and Play Area',
      map: 'https://maps.app.goo/',
      address: '6th road',
      owner: 'hammad khan',
    },
    {
      id: 9,
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard ',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city: 'Islamabad',
      area: '2000 sq ft',
      capacity: '500',
      attraction: 'Park,Garden and Play Area',
      map: 'https://maps.app.goo/',
      address: '6th road',
      owner: 'hammad khan',
    },
    {
      id: 10,
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard ',
      location: 'branch name',
      price: '40,0000',
      city: 'Islamabad',
      area: '2000 sq ft',
      capacity: '500',
      attraction: 'Park,Garden and Play Area',
      map: 'https://maps.app.goo/',
      address: '6th road',
      owner: 'hammad khan',
      hall: '12 halls',
    },
    {
      id: 11,
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard ',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city: 'Islamabad',
      area: '2000 sq ft',
      capacity: '500',
      attraction: 'Park,Garden and Play Area',
      map: 'https://maps.app.goo/',
      address: '6th road',
      owner: 'hammad khan',
    },
    {
      id: 12,
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard ',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city: 'Islamabad',
      area: '2000 sq ft',
      capacity: '500',
      attraction: 'Park,Garden and Play Area',
      map: 'https://maps.app.goo/',
      address: '6th road',
      owner: 'hammad khan',
    },
  ];
  constructor(private router: Router) {
    this.updateDisplayedCards();
  }
  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  navigateToAddHall() {
    this.router.navigate(['hms-main/add-hall']);
  }
  navigateToDetail(data: any) {
    this.router.navigate(['hms-main/hall-detail', data.id], {
      state: { data },
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateDisplayedCards();
  }

  private updateDisplayedCards() {
    // Adjust the number of cards displayed based on window width
    const cardsPerSlide = window.innerWidth < 769 ? 1 : 3; // Adjust this value as needed

    const startIndex = this.currentIndex;
    const endIndex = (this.currentIndex + cardsPerSlide) % this.cardData.length;

    if (endIndex >= startIndex) {
      this.cardData = this.cardData.slice(startIndex, endIndex + 1);
    } else {
      this.cardData = [
        ...this.cardData.slice(startIndex),
        ...this.cardData.slice(0, endIndex + 1),
      ];
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.cardData.length;
    this.updateDisplayedCards();
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.cardData.length) % this.cardData.length;
    this.updateDisplayedCards();
  }
}
