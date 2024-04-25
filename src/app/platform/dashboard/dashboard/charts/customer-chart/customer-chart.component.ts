import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-customer-chart',
  templateUrl: './customer-chart.component.html',
  styleUrls: ['./customer-chart.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class CustomerChartComponent implements OnInit {
  chart: am4charts.XYChart | undefined;
  series1Visible: boolean = true;
  series2Visible: boolean = true;
  @ViewChild('chartCanvas2', { static: true }) canvasRef!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.customerChart();
  }

  customerChart() {
    let chart = am4core.create(this.canvasRef.nativeElement, am4charts.XYChart);
    chart.colors.step = 2;
    let legend = new am4charts.Legend();
    chart.legend = legend;
    chart.legend.position = 'top';
    chart.legend.paddingBottom = 20;
    chart.legend.labels.template.maxWidth = 95;

    // Add event listeners to legend items
    legend.itemContainers.template.events.on('hit', (event) => {
      // Check if dataItem is defined
      if (event.target.dataItem) {
        // Use type assertion to inform TypeScript about the structure of dataContext
        let name = (event.target.dataItem.dataContext as any).name;
        if (name === 'Repeated Customer') {
          this.toggleValue1Visibility();
        } else if (name === 'New Customer') {
          this.toggleValue2Visibility();
        }
      }
    });
    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = 'category';
    xAxis.renderer.cellStartLocation = 0.1;
    xAxis.renderer.cellEndLocation = 0.9;
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.minGridDistance = 50;
    // xAxis.renderer.grid.template.strokeOpacity = 0;

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    // yAxis.renderer.grid.template.strokeOpacity = 0;
    yAxis.renderer.minGridDistance = 50;
    // yAxis.renderer.grid.template.strokeOpacity = 0;
    chart.width = am4core.percent(100);
    chart.align = 'center';
    chart.data = [
      {
        category: 'Jan',
        first: 40,
        second: 55,
      },
      {
        category: 'Feb',
        first: 30,
        second: 78,
      },
      {
        category: 'Mar',
        first: 27,
        second: 40,
      },
      {
        category: 'Apr',
        first: 50,
        second: 33,
      },
      {
        category: 'May',
        first: 27,
        second: 40,
      },
      {
        category: 'Jun',
        first: 50,
        second: 33,
      },
    ];

    this.chart = chart;
    this.createSeries(
      this.chart,
      'first',
      'second',
      'Repeated Customer',
      'New Customer',
      30
    );
    // this.createSeries(this.chart, 'first', 'Repeated Customer', 30); // 50% width
    // this.createSeries(this.chart, 'second', 'New Customer', 30); // 50% width
  }

  // private createSeries(chart: am4charts.XYChart, value: any, name: any) {
  //   let series = chart.series.push(new am4charts.ColumnSeries());
  //   series.dataFields.valueY = value;
  //   series.dataFields.categoryX = 'category';
  //   series.name = name;

  //   if (name === 'Repeated Customer') {
  //     series.columns.template.fill = am4core.color('#fb6f10');
  //   } else if (name === 'New Customer') {
  //     series.columns.template.fill = am4core.color('#622cad');
  //   }
  //   series.columns.template.width = am4core.percent(15);
  //   series.columns.template.tooltipText = '{name}: {valueY.value}';
  //   series.columns.template.strokeWidth = 0;
  //   series.columns.template.column.cornerRadiusTopLeft = 15;
  //   series.columns.template.column.cornerRadiusTopRight = 15;

  //   return series;
  // }
  private createSeries(
    chart: am4charts.XYChart,
    value1: any,
    value2: any,
    name1: any,
    name2: any,
    columnWidth: number
  ) {
    // Create the first series
    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.dataFields.valueY = value1;
    series1.dataFields.categoryX = 'category';
    series1.name = name1;
    series1.columns.template.fill = am4core.color('#fb6f10');
    series1.columns.template.width = am4core.percent(columnWidth);
    series1.columns.template.tooltipText = '{name}: {valueY.value}';
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.column.cornerRadiusTopLeft = 15;
    series1.columns.template.column.cornerRadiusTopRight = 15;

    // Create the second series
    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = value2;
    series2.dataFields.categoryX = 'category';
    series2.name = name2;
    series2.columns.template.fill = am4core.color('#622cad');
    series2.columns.template.width = am4core.percent(columnWidth);
    series2.columns.template.tooltipText = '{name}: {valueY.value}';
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.column.cornerRadiusTopLeft = 15;
    series2.columns.template.column.cornerRadiusTopRight = 15;

    return [series1, series2];
  }

  // private createSeries(
  //   chart: am4charts.XYChart,
  //   value: any,
  //   name: any,
  //   columnWidth: number
  // ) {
  //   let series = chart.series.push(new am4charts.ColumnSeries());
  //   series.dataFields.valueY = value;
  //   series.dataFields.categoryX = 'category';
  //   series.name = name;

  //   if (name === 'Repeated Customer') {
  //     series.columns.template.fill = am4core.color('#fb6f10');
  //   } else if (name === 'New Customer') {
  //     series.columns.template.fill = am4core.color('#622cad');
  //   }
  //   series.columns.template.width = am4core.percent(columnWidth);
  //   series.columns.template.tooltipText = '{name}: {valueY.value}';
  //   series.columns.template.strokeWidth = 0;
  //   series.columns.template.column.cornerRadiusTopLeft = 15;
  //   series.columns.template.column.cornerRadiusTopRight = 15;

  //   return series;
  // }
  toggleValue1Visibility() {
    if (this.chart) {
      let series = this.chart.series.values.find(
        (s) => s.name === 'Repeated Customer'
      );
      if (series) {
        series.hidden = !series.hidden;
        console.log('First series visibility toggled');
        this.chart.invalidateData();
      } else {
        this.createSeries(
          this.chart,
          'first',
          'second',
          'Repeated Customer',
          'New Customer',
          30
        );
      }
    }
  }

  toggleValue2Visibility() {
    if (this.chart) {
      let series = this.chart.series.values.find(
        (s) => s.name === 'New Customer'
      );
      if (series) {
        series.hidden = !series.hidden;
        console.log('Second series visibility toggled');
        this.chart.invalidateData();
      } else {
        this.createSeries(
          this.chart,
          'first',
          'second',
          'Repeated Customer',
          'New Customer',
          30
        );
      }
    }
  }

  // toggleValue1Visibility() {
  //   if (this.chart) {
  //     let series = this.chart.series.values.find(
  //       (s) => s.name === 'Repeated Customer'
  //     );
  //     if (series) {
  //       series.hidden = !series.hidden;
  //       console.log('First series visibility toggled');
  //       this.chart.invalidateData();
  //     } else {
  //       // this.createSeries(this.chart, 'first', 'Repeated Customer', 30); // 50% width
  //     }
  //   }
  // }
  // toggleValue2Visibility() {
  //   if (this.chart) {
  //     let series = this.chart.series.values.find(
  //       (s) => s.name === 'New Customer'
  //     );
  //     if (series) {
  //       series.hidden = !series.hidden;
  //       console.log('Second series visibility toggled');
  //       this.chart.invalidateData();
  //     } else {
  //       // this.createSeries(this.chart, 'second', 'New Customer', 30); // 50% width
  //     }
  //   }
  // }
}
