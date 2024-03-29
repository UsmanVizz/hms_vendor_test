import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule, InputSwitchModule, ButtonModule, CardModule],
})
export class MenuComponent {
  @ViewChild('cardRow', { static: true }) cardRow!: ElementRef<HTMLDivElement>;
  @ViewChild('carouselExampleIndicators2', { static: true })
  carouselExampleIndicators2!: ElementRef;

  cardsData = [
    { title: 'Card 1', imageUrl: 'assets/food/images/food-1.jpg' },
    { title: 'Card 1', imageUrl: 'assets/food/images/food-1.jpg' },
    { title: 'Card 1', imageUrl: 'assets/food/images/food-1.jpg' },
   { title: 'Card 1', imageUrl: 'assets/food/images/food-1.jpg' },
    { title: 'Card 2', imageUrl: 'assets/food/images/food-2.jpg' },
  ];

  scrollDistance = 10; // Adjust scroll distance as needed
  scrollInterval = 10; // Adjust scroll interval as needed

  scrollIntervalId: any;

  scrollCards(direction: 'left' | 'right'): void {
    const cardRowElement = this.cardRow.nativeElement;
    const scrollAmount =
      direction === 'left' ? -this.scrollDistance : this.scrollDistance;
    clearInterval(this.scrollIntervalId); // Clear any existing scroll interval

    this.scrollIntervalId = setInterval(() => {
      cardRowElement.scrollLeft += scrollAmount;

      // Check if reached the end of cards
      if (direction === 'left' && cardRowElement.scrollLeft <= 0) {
        clearInterval(this.scrollIntervalId);
      } else if (
        direction === 'right' &&
        cardRowElement.scrollLeft >=
          cardRowElement.scrollWidth - cardRowElement.clientWidth
      ) {
        clearInterval(this.scrollIntervalId);
      }
    }, this.scrollInterval);
  }

  selectCard(card: any): void {
    this.selectCard = card;
  }
  private scrollLeft() {
    if (this.cardRow && this.carouselExampleIndicators2) {
      this.cardRow.nativeElement.scrollLeft -= 100; // Adjust the scroll amount as needed
      this.carouselExampleIndicators2.nativeElement.scrollLeft -= 100; // Adjust the scroll amount as needed
    }
  }

  private scrollRight() {
    if (this.cardRow && this.carouselExampleIndicators2) {
      this.cardRow.nativeElement.scrollLeft += 100; // Adjust the scroll amount as needed
      this.carouselExampleIndicators2.nativeElement.scrollLeft += 100; // Adjust the scroll amount as needed
    }
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
  ];
}
