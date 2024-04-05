import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

declare interface JQuery<TElement extends HTMLElement> {
  carousel(): JQuery<TElement>;
}

declare let $: any;
@Component({
  selector: 'app-catagories',
  standalone: true,
  imports: [CommonModule, ButtonModule, InputSwitchModule, FormsModule],
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.scss'],
})
export class CatagoriesComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  checked: boolean = false;
  ngAfterViewInit(): void {}
  navigateToAddCategory() {
    this.router.navigate(['hms-main/add-category']);
  }
  activeIndex: number = 0;

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }

  cards = [
    {
      imageUrl: 'assets/food/images/food-2.jpg',
      title: 'Menu Category Name 1',
      text: 'Richard McClintock, a Latin scholar from Hampden-Sydney College...',
      item: 29,
      checked: false,
      isChecked: false,
      buttons: [
        { icon: 'pi pi-filter', severity: 'secondary' },
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
      text: 'Richard McClintock, a Latin scholar from Hampden-Sydney College...',
      item: 29,
      checked: false,
      isChecked: false,
      buttons: [
        { icon: 'pi pi-filter', severity: 'secondary' },
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
      text: 'Richard McClintock, a Latin scholar from Hampden-Sydney College...',
      item: 29,
      checked: false,
      isChecked: false,
      buttons: [
        { icon: 'pi pi-filter', severity: 'secondary' },
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
      text: 'Richard McClintock, a Latin scholar from Hampden-Sydney College...',
      item: 29,
      checked: false,
      isChecked: false,
      buttons: [
        { icon: 'pi pi-filter', severity: 'secondary' },
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
      text: 'Richard McClintock, a Latin scholar from Hampden-Sydney College...',
      item: 29,
      checked: false,
      isChecked: false,
      buttons: [
        { icon: 'pi pi-filter', severity: 'secondary' },
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
      text: 'Richard McClintock, a Latin scholar from Hampden-Sydney College...',
      item: 29,
      checked: false,
      isChecked: false,
      buttons: [
        { icon: 'pi pi-filter', severity: 'secondary' },
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
