import { CommonModule } from '@angular/common';
import {ApiResponse,ApiService } from '../../../services/api-services'
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';
// import * as $ from 'jquery';
declare interface JQuery<TElement extends HTMLElement> {
  carousel(): JQuery<TElement>;
}

declare let $: any;
@Component({
  selector: 'app-manage-branch',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './manage-branch.component.html',
  styleUrls: ['./manage-branch.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ManageBranchComponent implements OnInit, AfterViewInit {
  constructor(private router: Router,private apiService: ApiService) {}
  // ngOnInit(): void {}
  menuCategories: any[] = [];
  ngOnInit(): void {
    this.apiService.get('http://localhost:3001/api/building/branch')
      .subscribe(
        (response: ApiResponse) => {
          console.log('API response:', response);
          // Check if response.data is not null or undefined
          if (response.data && response.data.users) {
            // Access the users data here
            this.menuCategories = response.data.users;
            console.log('Users:',  this.menuCategories);
          } else {
            console.error('No users data found in the response.');
          }
        },
        (error: any) => {
          console.error('Error:', error);
          // Handle error here
        }
      );
  }
  ngAfterViewInit(): void {}
  navigateToAddBranch() {
    this.router.navigate(['/hms-main/add-branch']);
  }
  activeIndex: number = 0;

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }
//   menuCategories = [
//     {
//       id: 1,
//       imageUrl: 'assets/halls/image.webp',
//       title: 'Category 1',
//       description:
//         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//       location: 'Location 1',
//       hall: 'Hall 1',
//       city:'Islamabad',
//       area:'2000 sq ft',
//       capacity:'5554',
// attraction:'Park,Garden and Play Area',
// map:'https://maps.app.goo/',
// address:'6th road',
// owner:'hammad khan',
//       images: [
//         { url: 'assets/halls/image.webp' },
//         { url: 'assets/halls/image.webp' },
//         { url: 'assets/halls/image.webp' },
//       ],
//     },
//     {
//       id: 2,
//       imageUrl: 'assets/halls/image.webp',
//       title: 'Menu Category Name',
//       description:
//         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//       location: 'branch name',
//       hall: '12 halls',
//       city:'Islamabad',
//       area:'2000 sq ft',
//       capacity:'5554',
// attraction:'Park,Garden and Play Area',
// map:'https://maps.app.goo/',
// address:'6th road',
// owner:'hammad khan',
//     },
//     {
//       id: 3,
//       imageUrl: 'assets/halls/image2.webp',
//       title: 'Menu Category Name',
//       description:
//         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//       location: 'branch name',
//       hall: '12 halls',
//       city:'Islamabad',
//       area:'2000 sq ft',
//       capacity:'5554',
// attraction:'Park,Garden and Play Area',
// map:'https://maps.app.goo/',
// address:'6th road',
// owner:'hammad khan',
//     },
//     {
//       id: 4,
//       imageUrl: 'assets/halls/image.webp',
//       title: 'Menu Category Name',
//       description:
//         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//       location: 'branch name',
//       hall: '12 halls',
//       city:'Islamabad',
//       area:'2000 sq ft',
//       capacity:'5554',
// attraction:'Park,Garden and Play Area',
// map:'https://maps.app.goo/',
// address:'6th road',
// owner:'hammad khan',
//     },
//     {
//       id: 5,
//       imageUrl: 'assets/halls/image2.webp',
//       title: 'Menu Category Name',
//       description:
//         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//       location: 'branch name',
//       hall: '12 halls',
//       city:'Islamabad',
//       area:'2000 sq ft',
//       capacity:'5554',
// attraction:'Park,Garden and Play Area',
// map:'https://maps.app.goo/',
// address:'6th road',
// owner:'hammad khan',
//     },
//   ];
  navigateToDetail(category: any) {
    this.router.navigate(['/hms-main/branch-detail', category.id], { state: { category } }); 
  }
}
