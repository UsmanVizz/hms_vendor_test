import { CommonModule } from '@angular/common';
// import { InputSwitchModule } from 'primeng/inputswitch';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  AfterViewInit,
} from '@angular/core';
// import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';

declare interface JQuery<TElement extends HTMLElement> {
  carousel(): JQuery<TElement>;
}

declare let $: any;
@Component({
  selector: 'app-catagories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.scss'],
})
export class CatagoriesComponent implements OnInit {
  checked: boolean = false;
  activeIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToAddCategory() {
    this.router.navigate(['hms-owner/add-category']);
  }

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }

  cards = [
    {
      imageUrl: 'assets/food/images/food-2.jpg',
      title: 'Menu Category Name 1',
      text: ' a Latin scholar from Hampden-Sydney College...Richard McClintock,a Latin scholar from Hampden-Sydney College...Richard McClintock,a Latin scholar from Hampden-Sydney College...Richard McClintock,a Latin scholar from Hampden-Sydney College...Richard McClintock, a Latin scholar from Hampden-Sydney College...',
      item: 29,
      checked: false,
      isChecked: false,
      buttons: [
        { icon: 'fas fa-filter', severity: 'secondary' },
        { icon: 'pi pi-trash', severity: 'secondary' },
        { icon: 'pi pi-eye', severity: 'secondary' },
      ],
      images: [
        { url: 'assets/food/images/food-2.jpg' },
        { url: 'assets/food/images/food-2.jpg' },
        { url: 'assets/food/images/food-2.jpg' },
      ],
    },
    {
      imageUrl: 'assets/food/images/food-2.jpg',
      title: 'Menu Category Name 1',
      text: ' Latin scholar from Hampden-Sydney College..m Hampden-Sydney College...Richard McClintock,a Latin scholar from Hampden-Sydney College...Richard McClintock,a Latin scholar from Hampden-Sydney College...Richard McClintock,.Richard McClintock, a Latin scholar from Hampden-Sydney College...',
      item: 29,
      checked: false,
      isChecked: false,
      buttons: [
        { icon: 'fas fa-filter', severity: 'secondary' },
        { icon: 'pi pi-trash', severity: 'secondary' },
        { icon: 'pi pi-eye', severity: 'secondary' },
      ],
      images: [
        { url: 'assets/food/images/food-2.jpg' },
        { url: 'assets/food/images/food-2.jpg' },
        { url: 'assets/food/images/food-2.jpg' },
      ],
    },
    {
      imageUrl: 'assets/food/images/food-2.jpg',
      title: 'Menu Category Name 1',
      text: 'a Latin scholar from Hampden-Sydney McClintock,a Latin scholar from Hampden-Sydney College..McClintock,a Latin scholar from Hampden-Sydney College.. Collegfrom Hampden-Sydneyholar from Hampden-Sydney College...a Latin scholar from Hampden-Sydney College...Richard McClintock,a Latin scholar from Hampden-Sydney College...Richard McClintock,',
      item: 29,
      checked: false,
      isChecked: false,
      buttons: [
        { icon: 'fas fa-filter', severity: 'secondary' },
        { icon: 'pi pi-trash', severity: 'secondary' },
        { icon: 'pi pi-eye', severity: 'secondary' },
      ],
      images: [
        { url: 'assets/food/images/food-2.jpg' },
        { url: 'assets/food/images/food-2.jpg' },
        { url: 'assets/food/images/food-2.jpg' },
      ],
    },
    {
      imageUrl: 'assets/food/images/food-2.jpg',
      title: 'Menu Category Name 1',
      text: 'a Latin scholar from Hampden-Sydney College...Richard McClintock,hard McClintock, a Latin scholar from Hampden-Sydney College...a Latin scholar from Hampden-Sydney College...Richard McClintock,a Latin scholar from Hampden-Sydney College...Richard McClintock,a Latin scholar from Hampden-Sydney College...Richard McClintock,',
      item: 29,
      checked: false,
      isChecked: false,
      buttons: [
        { icon: 'fas fa-filter', severity: 'secondary' },
        { icon: 'pi pi-trash', severity: 'secondary' },
        { icon: 'pi pi-eye', severity: 'secondary' },
      ],
      images: [
        { url: 'assets/food/images/food-2.jpg' },
        { url: 'assets/food/images/food-2.jpg' },
        { url: 'assets/food/images/food-2.jpg' },
      ],
    },
    {
      imageUrl: 'assets/food/images/food-2.jpg',
      title: 'Menu Category Name 1',
      text: ' a Latin scholar from Hampden-Sydney McClintock,a Latin scholar from Hampden-Sydney College.. College...Richard McClintock,a Latin scholar from Hampden-Sydney College... McClintock,a Latin scholar from Hampden-Sydney College..McClintock,a Latin scholar from Hampden-Sydney College..McClintock,a Latin scholar from Hampden-Sydney College..',
      item: 29,
      checked: false,
      isChecked: false,
      buttons: [
        { icon: 'fas fa-filter', severity: 'secondary' },
        { icon: 'pi pi-trash', severity: 'secondary' },
        { icon: 'pi pi-eye', severity: 'secondary' },
      ],
      images: [
        { url: 'assets/food/images/food-2.jpg' },
        { url: 'assets/food/images/food-2.jpg' },
        { url: 'assets/food/images/food-2.jpg' },
      ],
    },
    {
      imageUrl: 'assets/food/images/food-1.jpg',
      title: 'Menu Category Name 2',
      text: 'a Latin scholar from Hampden-Sydney  from Hampden-Sydney College...Richard McClintock,a Latin scholar from Hampden-Sydney College...Richard McClintock, a Latin scholar from Hampden-Sydney College...McClintock,a Latin scholar from Hampden-Sydney College..McClintock,a Latin scholar from Hampden-Sydney College..McClintock,a Latin scholar from Hampden-Sydney College..',
      item: 29,
      checked: false,
      isChecked: false,
      buttons: [
        { icon: 'fas fa-filter', severity: 'secondary' },
        { icon: 'pi pi-trash', severity: 'secondary' },
        { icon: 'pi pi-eye', severity: 'secondary' },
      ],
      images: [
        { url: 'assets/food/images/food-1.jpg' },
        { url: 'assets/food/images/food-2.jpg' },
        { url: 'assets/food/images/food-1.jpg' },
      ],
    },
    // Add more card objects as needed
  ];
}
