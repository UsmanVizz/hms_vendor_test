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
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DealsComponent implements OnInit {
  checked: boolean = false;
  activeIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToAddDeal() {
    this.router.navigate(['hms-main/add-deal']);
  }

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }

  cards = [
    {
      imageUrl: 'assets/food/images/food-2.jpg',
      title: 'Deal Name',
      text: 'Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi pellentesque id et. Cursus convallis sit tincidunt venenatis  Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi pellentesque id et. Cursus convallis sit tincidunt venenatis  ',
      dealTitle: 'Add Item',
      dealText:
        'Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi nenatis  ',
      standardRate: 'Rs 300',
      discountRate: 'Rs 200',

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
      title: 'Deal Name',
      text: 'Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi pellentesque id et. Cursus convallis sit tincidunt venenatis  Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi pellentesque id et. Cursus convallis sit tincidunt venenatis  ',
      dealTitle: 'Add Item',
      dealText:
        'Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi nenatis  ',
      standardRate: 'Rs 300',
      discountRate: 'Rs 200',
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
      title: 'Deal Name',
      text: 'Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi pellentesque id et. Cursus convallis sit tincidunt venenatis  Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi pellentesque id et. Cursus convallis sit tincidunt venenatis  ',
      dealTitle: 'Add Item',
      dealText:
        'Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi nenatis  ',
      standardRate: 'Rs 300',
      discountRate: 'Rs 200',
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
      title: 'Deal Name',
      text: 'Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi pellentesque id et. Cursus convallis sit tincidunt venenatis  Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi pellentesque id et. Cursus convallis sit tincidunt venenatis  ',
      dealTitle: 'Add Item',
      dealText:
        'Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi nenatis  ',
      standardRate: 'Rs 300',
      discountRate: 'Rs 200',
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
      title: 'Deal Name',
      text: 'Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi pellentesque id et. Cursus convallis sit tincidunt venenatis  Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi pellentesque id et. Cursus convallis sit tincidunt venenatis  ',
      dealTitle: 'Add Item',
      dealText:
        'Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi nenatis  ',
      standardRate: 'Rs 300',
      discountRate: 'Rs 200',
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
      title: 'Deal Name',
      text: 'Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi pellentesque id et. Cursus convallis sit tincidunt venenatis  Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi pellentesque id et. Cursus convallis sit tincidunt venenatis  ',
      dealTitle: 'Add Item',
      dealText:
        'Lorem ipsum dolor sit amet consectetur. In auctor quam sollicitudin facilisi nenatis  ',
      standardRate: 'Rs 300',
      discountRate: 'Rs 200',
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
