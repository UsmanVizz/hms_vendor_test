import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
declare interface JQuery<TElement extends HTMLElement> {
  carousel(): JQuery<TElement>;
}

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements AfterViewInit {
  ngAfterViewInit() {
    (<any>$('#carousel-example-generic')).carousel();
  }
}