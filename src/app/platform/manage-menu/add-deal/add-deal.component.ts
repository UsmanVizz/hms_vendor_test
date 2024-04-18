import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-add-deal',
  standalone: true,
  imports: [DragDropModule, CommonModule],
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.scss'],
})
export class AddDealComponent {
  cardsData = [
    {
      title: 'Card 1',
      imageUrl: 'assets/food/images/food-1.jpg',
      description:
        'With supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Card 2',
      imageUrl: 'assets/food/images/food-1.jpg',
      description:
        'With supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Card 3',
      imageUrl: 'assets/food/images/food-1.jpg',
      description:
        'With supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Card 4',
      imageUrl: 'assets/food/images/food-1.jpg',
      description:
        'With supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Card 5',
      imageUrl: 'assets/food/images/food-2.jpg',
      description:
        'With supporting text below as a natural lead-in to additional content.',
    },
  ];
  selectedCardIndex: number = -1;

  constructor() {}
  removeCard(index: number): void {
    this.cardsData.splice(index, 1);
  }
  getCardPosition(index: number): any {
    return {
      left: index % 2 === 0 ? '0' : '50%',
      top: Math.floor(index / 2) * 120 + 'px',
    };
  }
  toggleSelection(index: number): void {
    this.selectedCardIndex = index;
  }

  isSelected(index: number): boolean {
    return this.selectedCardIndex === index;
  }

  sourceItems = ['Item 1', 'Item 2', 'Item 3'];
  destinationItems: string[] = [];
  onDrop(event: CdkDragDrop<string[]>, targetIndex: number): void {
    const droppedIndex = event.previousIndex;

    // Check if the item is dropped at a different position
    if (droppedIndex !== targetIndex) {
      // Remove the item from its previous position
      const movedItem = this.cardsData.splice(droppedIndex, 1)[0];

      // Insert the item at the target index
      this.cardsData.splice(targetIndex, 0, movedItem);
    }
  }
}
