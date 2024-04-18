import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  @ViewChild('myChart') canvasRef!: ElementRef;

  ngOnInit() {
    this.chartFunction();
  }

  chartFunction() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const ctx = this.canvasRef.nativeElement.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Bookings',
            fill: false,
            borderColor: '#0000FF',
            tension: 0.4,
            data: [65, 59, 80, 81, 56, 55, 10],
          },
          {
            label: 'Vendor',
            fill: false,
            borderColor: '#622CAD',
            tension: 0.4,
            data: [28, 48, 40, 19, 86, 27, 90],
          },
        ],
      },
    });
  }
}
