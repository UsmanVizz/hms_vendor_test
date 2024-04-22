import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  chart: am4charts.XYChart | undefined;
  series1Visible: boolean = true;
  series2Visible: boolean = true;

  constructor(private cdr: ChangeDetectorRef) {}

  @ViewChild('chartCanvas2', { static: true }) canvasRef!: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.chartFunction();
  }

  chartFunction() {
    let chart = am4core.create(this.canvasRef.nativeElement, am4charts.XYChart);
    this.chart = chart;

    chart.data = [
      {
        date: new Date(2019, 5, 12),
        value1: 50,
        value2: 48,
        previousDate: new Date(2019, 5, 5),
      },
      {
        date: new Date(2019, 5, 13),
        value1: 53,
        value2: 51,
        previousDate: new Date(2019, 5, 6),
      },
      {
        date: new Date(2019, 5, 14),
        value1: 56,
        value2: 58,
        previousDate: new Date(2019, 5, 7),
      },
      {
        date: new Date(2019, 5, 15),
        value1: 52,
        value2: 53,
        previousDate: new Date(2019, 5, 8),
      },
      {
        date: new Date(2019, 5, 16),
        value1: 48,
        value2: 44,
        previousDate: new Date(2019, 5, 9),
      },
      {
        date: new Date(2019, 5, 17),
        value1: 47,
        value2: 42,
        previousDate: new Date(2019, 5, 10),
      },
      {
        date: new Date(2019, 5, 18),
        value1: 59,
        value2: 55,
        previousDate: new Date(2019, 5, 11),
      },
    ];

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    let valueAxis: any = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series for value1 (blue)
    let series: any = chart.series.push(new am4charts.LineSeries());
    series.name = 'value1';
    series.dataFields.valueY = 'value1';
    series.dataFields.dateX = 'date';
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tensionX = 0.8;
    series.tensionY = 0.8;
    series.stroke = am4core.color('#007bff'); // Blue color
    series.tooltipText =
      '[bold]{date.formatDate()}:[/] {value1}\n[bold]{previousDate.formatDate()}:[/] {value2}';
    series.tooltip.pointerOrientation = 'vertical';
    this.series1Visible = !this.series1Visible;
    this.toggleValue1Visibility();

    // Create series for value2 (purple)
    let series2: any = chart.series.push(new am4charts.LineSeries());
    series2.name = 'value2';
    series2.dataFields.valueY = 'value2';
    series2.dataFields.dateX = 'date';
    series2.strokeWidth = 2;
    series2.minBulletDistance = 10;
    series2.tensionX = 0.8;
    series2.tensionY = 0.8;
    series2.stroke = am4core.color('#622cad'); // Purple color
    series2.tooltip.pointerOrientation = 'vertical';
    this.series2Visible = !this.series2Visible;
    this.toggleValue2Visibility();

    // Update visibility properties when series visibility changes

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
  }

  toggleValue1Visibility() {
    this.series1Visible = !this.series1Visible;
    if (this.chart) {
      let series = this.chart.series.values.find(
        (s) => s.dataFields.valueY === 'value1'
      );
      if (series) {
        series.hidden = this.series1Visible;
        this.series1Visible ? series.show() : series.hide();
        console.log('Value 1 visibility toggled');
      }
    }
  }

  toggleValue2Visibility() {
    this.series2Visible = !this.series2Visible;
    if (this.chart) {
      let series = this.chart.series.values.find(
        (s) => s.dataFields.valueY === 'value2'
      );
      if (series) {
        series.hidden = this.series2Visible;
        this.series2Visible ? series.show() : series.hide();
        console.log('Value 2 visibility toggled');
      }
    }
  }
}
