import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-deal',
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
  ],
})
export class AddDealComponent implements OnInit {
  addDealForm!: FormGroup;

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

  items = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];

  basket = ['Oranges', 'Bananas', 'Cucumbers'];

  constructor() {}

  ngOnInit(): void {}

  trackByFn(index: number, item: any): any {
    return index;
  }

  get menuItems() {
    return this.addDealForm.get('menuItems') as FormArray;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addSelectItem(item: string) {
    // Find the index of the item in the items array
    const index = this.items.indexOf(item);

    // If the item is found in the items array
    if (index !== -1) {
      // Remove the item from the items array
      this.items.splice(index, 1);

      // Add the item to the basket array
      this.basket.push(item);

      // Optionally, you can update the form control value or perform any other necessary actions here
    }
  }

  returnSelectedItem(item: string) {
    const index = this.basket.indexOf(item);

    // If the item is found in the basket array
    if (index !== -1) {
      // Remove the item from the basket array
      this.basket.splice(index, 1);

      // Add the item to the items array
      this.items.push(item);

      // Optionally, you can update the form control value or perform any other necessary actions here
    }
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

  submitDeal() {
    const selectedItems = this.basket;

    const formData = {
      ...this.addDealForm.value,
      selectedItems: selectedItems,
    };

    console.log(formData);

    this.addDealForm.reset();
  }
}
