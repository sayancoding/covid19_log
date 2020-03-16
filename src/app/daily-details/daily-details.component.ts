import { Component, OnInit } from "@angular/core";
import { DailyUpdateService } from "../Services/dailyUpdate.service";
import { Color } from "ng2-charts";
import { ChartType, ChartDataSets, ChartOptions } from "chart.js";

@Component({
  selector: "app-daily-details",
  templateUrl: "./daily-details.component.html",
  styleUrls: ["./daily-details.component.css"]
})
export class DailyDetailsComponent implements OnInit {
  // applying logics

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
  constructor(private _dailyService: DailyUpdateService) {}

  ngOnInit() {
    this._dailyService.getDailyUpdate().subscribe(res => {
      this.dailyDetails = res;
    });
  }
}
