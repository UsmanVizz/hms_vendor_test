import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import {chart1Data ,chart2Data ,chart3Data } from '../../../services/chart-data'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DashboardComponent implements AfterViewInit {
  constructor() {}
  @ViewChild('chartCanvas1') chartCanvas1!: ElementRef;
  @ViewChild('chartCanvas2') chartCanvas2!: ElementRef;
  @ViewChild('chartCanvas3') chartCanvas3!: ElementRef;


  ngAfterViewInit(): void {
    this.initializeChart1();
    this.initializeChart2();
    this.initializeChart3();
  }
  initializeChart1(): void {
    const ctx = this.chartCanvas1.nativeElement.getContext('2d');
    const { data, options } = chart1Data();
    
    // Customize legend options
    const legendOptions = {
      position: 'bottom', // Position the legend at the bottom
      labels: {
        usePointStyle: true,
        color: 'black', // Adjust color as needed
      },
    };
  
    new Chart(ctx, { 
      type: 'pie', 
      data,
      options: { ...(options as any), legend: legendOptions }, // Type assertion to include 'legend'
    });
  }
  
  

  initializeChart2(): void {
    const ctx = this.chartCanvas2.nativeElement.getContext('2d');
    const { data } = chart2Data();
    new Chart(ctx, { type: 'line', data });
  }

  initializeChart3(): void {
    const ctx = this.chartCanvas3.nativeElement.getContext('2d');
    const { data } = chart3Data();
    new Chart(ctx, { type: 'bar', data });
  }
  // ngOnInit(): void {
  //   // Assign chart data and options
  //   this.chart1Options = chart1Data().options;
  //   this.chart1Data = chart1Data().data;
  //   this.chart2Options = chart2Data().options;
  //   this.chart2Data = chart2Data().data;
  //   this.chart3Options = chart3Data().options;
  //   this.chart3Data = chart3Data().data;
  // }
  
}
