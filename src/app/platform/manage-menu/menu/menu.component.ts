import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { InputSwitchModule } from 'primeng/inputswitch';
// import { ButtonModule } from 'primeng/button';
// import { CardModule } from 'primeng/card';
// import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MenuComponent implements OnInit {
  scrollDistance = 10;
  scrollInterval = 10;
  scrollIntervalId: any;
  // activeIndex: number = 0;

  @ViewChild('cardRow', { static: true }) cardRow!: ElementRef<HTMLDivElement>;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('carouselExampleIndicators2', { static: true })
  carouselExampleIndicators2!: ElementRef;
  cardWidth: number = 300;
  cardsData = [
    { title: 'Card 1', imageUrl: 'assets/food/images/food-1.jpg' },
    { title: 'Card 1', imageUrl: 'assets/food/images/food-1.jpg' },
    { title: 'Card 1', imageUrl: 'assets/food/images/food-1.jpg' },
    { title: 'Card 1', imageUrl: 'assets/food/images/food-1.jpg' },
    { title: 'Card 1', imageUrl: 'assets/food/images/food-1.jpg' },
    { title: 'Card 1', imageUrl: 'assets/food/images/food-1.jpg' },
    { title: 'Card 1', imageUrl: 'assets/food/images/food-1.jpg' },
    { title: 'Card 1', imageUrl: 'assets/food/images/food-1.jpg' },
  ];

  prevSlide(): void {
    this.scrollContainer.nativeElement.scrollLeft -= this.cardWidth;
    console.log('jsd');
  }

  nextSlide(): void {
    this.scrollContainer.nativeElement.scrollLeft += this.cardWidth;
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
  ];

  constructor(private router: Router) {
    this.selectedCards = new Array(this.cardsData.length).fill(false);
  }

  ngOnInit(): void {}

  navigateToAddMenu() {
    this.router.navigate(['/hms-owner/add-menu']);
  }
  selectedCards: boolean[] = [];
  toggleSelection(index: number) {
    this.selectedCards[index] = !this.selectedCards[index];
    console.log('ddd');
  }

  isSelected(index: number): boolean {
    return this.selectedCards[index];
  }
}
