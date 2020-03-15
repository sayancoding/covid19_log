import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective, Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "covid19";
  // Doughnut
  public doughnutChartLabels: Label[] = [
    "Confirmed Issues",
    "Suspected Issues",
    "Rationing Issues"
  ];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70]
  ];
  public doughnutChartType: ChartType = "doughnut";
  
}
