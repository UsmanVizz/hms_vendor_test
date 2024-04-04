import { Component, OnInit,AfterViewInit  } from '@angular/core';
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
export class ManageHallComponent implements OnInit, AfterViewInit {
  first: number = 0;

  rows: number = 10;
category: any;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
  cardData = [
    {
      id:1,
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city:'Islamabad',
      area:'2000 sq ft',
      capacity:'5554',
attraction:'Park,Garden and Play Area',
map:'https://maps.app.goo/',
address:'6th road',
owner:'hammad khan',
    },
    {
      id:2,
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city:'Islamabad',
      area:'2000 sq ft',
      capacity:'5554',
attraction:'Park,Garden and Play Area',
map:'https://maps.app.goo/',
address:'6th road',
owner:'hammad khan',
    },
    {
      id:3,
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city:'Islamabad',
      area:'2000 sq ft',
      capacity:'5554',
attraction:'Park,Garden and Play Area',
map:'https://maps.app.goo/',
address:'6th road',
owner:'hammad khan',
    },
    {
      id:4,
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city:'Islamabad',
      area:'2000 sq ft',
      capacity:'5554',
attraction:'Park,Garden and Play Area',
map:'https://maps.app.goo/',
address:'6th road',
owner:'hammad khan',
    },
    {
      id:5,
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city:'Islamabad',
      area:'2000 sq ft',
      capacity:'5554',
attraction:'Park,Garden and Play Area',
map:'https://maps.app.goo/',
address:'6th road',
owner:'hammad khan',
    },
    {
      id:6,
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city:'Islamabad',
      area:'2000 sq ft',
      capacity:'5554',
attraction:'Park,Garden and Play Area',
map:'https://maps.app.goo/',
address:'6th road',
owner:'hammad khan',
    },
    {
      id:7,
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city:'Islamabad',
      area:'2000 sq ft',
      capacity:'5554',
attraction:'Park,Garden and Play Area',
map:'https://maps.app.goo/',
address:'6th road',
owner:'hammad khan',
    },
    {
      id:8,
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city:'Islamabad',
      area:'2000 sq ft',
      capacity:'5554',
attraction:'Park,Garden and Play Area',
map:'https://maps.app.goo/',
address:'6th road',
owner:'hammad khan',
    },
    {
      id:9,
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city:'Islamabad',
      area:'2000 sq ft',
      capacity:'5554',
attraction:'Park,Garden and Play Area',
map:'https://maps.app.goo/',
address:'6th road',
owner:'hammad khan',
    },
    {
      id:10,
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      location: 'branch name',
      price: '40,0000',
      city:'Islamabad',
      area:'2000 sq ft',
      capacity:'5554',
attraction:'Park,Garden and Play Area',
map:'https://maps.app.goo/',
address:'6th road',
owner:'hammad khan',
      hall: '12 halls',
    },
    {
      id:11,
      imageUrl: 'assets/halls/image.webp',
      title: 'Menu Category Name',
      description:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city:'Islamabad',
      area:'2000 sq ft',
      capacity:'5554',
attraction:'Park,Garden and Play Area',
map:'https://maps.app.goo/',
address:'6th road',
owner:'hammad khan',
    },
    {
      id:12,
      imageUrl: 'assets/halls/image2.webp',
      title: 'Menu Category Name',
      description:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      location: 'branch name',
      price: '40,0000',
      hall: '12 halls',
      city:'Islamabad',
      area:'2000 sq ft',
      capacity:'5554',
attraction:'Park,Garden and Play Area',
map:'https://maps.app.goo/',
address:'6th road',
owner:'hammad khan',
    },
  ];
  constructor(private router: Router) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {}
  navigateToAddHall() {
    this.router.navigate(['hms-main/add-hall']);
  }
  navigateToDetail(data: any) {
    this.router.navigate(['hms-main/hall-detail', data.id], { state: { data } }); 
  }
}
