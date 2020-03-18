import { Component, OnInit } from "@angular/core";
import { DailyUpdateService } from "../Services/dailyUpdate.service";
import { Color, Label, SingleDataSet } from "ng2-charts";
import { ChartType, ChartDataSets, ChartOptions, RadialChartOptions } from "chart.js";
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-daily-details",
  templateUrl: "./daily-details.component.html",
  styleUrls: ["./daily-details.component.css"]
})
export class DailyDetailsComponent implements OnInit {
  // applying logics

  private datee = new Date().toLocaleString();
  private today_date: string ;

  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 50
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 50
          }
        }
      ]
    }
  };
  public bubbleChartType: ChartType = "bubble";
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 15, y: 20, r: 8 },
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 30, y: 8, r: 11 },
        { x: 44, y: 18, r: 27 },
        { x: 7, y: 8, r: 8 },
        { x: 34, y: 89, r: 18 }
      ],
      label: "Coutry Wise",
      backgroundColor: "green",
      borderColor: "blue",
      hoverBackgroundColor: "purple",
      hoverBorderColor: "red"
    }
  ];

  public bubbleChartColors: Color[] = [
    {
      backgroundColor: [
        "red",
        "green",
        "blue",
        "purple",
        "yellow",
        "brown",
        "magenta",
        "cyan",
        "orange",
        "pink"
      ]
    }
  ];

  dailyDetails: any;
  constructor(private _dailyService: DailyUpdateService, private _datePipe : DatePipe) {
    this.today_date = _datePipe.transform(this.datee, 'dd-MM-yyyy') ;
    console.log(this.today_date);
    
  }

  ngOnInit() {
    this._dailyService.getDailyUpdate().subscribe(res => {
      this.dailyDetails = res;
    });
  }

  // flex charts

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end"
      }
    }
  };

  public barChartLabels: Label[] = [
    "04-Mar-2020",
    "08-Mar-2020",
    "11-Mar-2020",
    "12-Mar-2020",
    "14-Mar-2020",
    "15-Mar-2020",
    this.datee
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "China" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Italy" }
  ];

  // 2nd graph
  public radarChartOptions: RadialChartOptions = {
    responsive: true
  };
  public radarChartLabels: Label[] = [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running"
  ];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: "China" },
    { data: [28, 48, 40, -19, 96, 27, 100], label: "Italy" }
  ];
  public radarChartType: ChartType = "radar";

  // third chart
  public polarAreaChartLabels: Label[] = [
    "Confirmation Issues",
    "Affected Issues",
    "Deaths Issues",
    "Trackings"
  ];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 140, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = "polarArea";
}
