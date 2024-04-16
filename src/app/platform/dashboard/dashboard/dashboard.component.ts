import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  chart1Data,
  chart2Data,
  chart3Data,
} from '../../../services/chart-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DashboardComponent implements OnInit {
  chart1Options: any;
  chart1Data: any;
  chart2Options: any;
  chart3Options: any;
  chart2Data: any;
  chart3Data: any;

  constructor() {}

  ngOnInit(): void {
    // Assign chart data and options
    this.chart1Options = chart1Data().options;
    this.chart1Data = chart1Data().data;
    this.chart2Options = chart2Data().options;
    this.chart2Data = chart2Data().data;
    this.chart3Options = chart3Data().options;
    this.chart3Data = chart3Data().data;
  }
}
