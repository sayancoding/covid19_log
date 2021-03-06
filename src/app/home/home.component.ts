import { Component, OnInit } from "@angular/core";
import { HomeService } from "../Services/home.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Label, MultiDataSet, SingleDataSet } from "ng2-charts";
import { ChartType } from "chart.js";
import { FormattedUpdate } from "../models/countryDetails";
import { GlobalDataService } from "../Services/globalData.service";
import { GlobalDetails } from "../models/globalDetails";
import { DatePipe } from '@angular/common';
import { EventEmitter } from 'events';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private response: any;
  private globalResponse: any;

  public country: string = "india";
  public lastUpdate: string;
  public formattedLastUpdate: string;

  public _data: FormattedUpdate;
  public _globalData: GlobalDetails;

  confirmedValue: number = 0;
  recoveredValue: number = 0;
  deathsValue: number = 0;

  globalConfirmedValue: number = 0;
  globalRecoveredValue: number = 0;
  globalDeathsValue: number = 0;

  // country chart JS

  public doughnutChartLabels: Label[] = [
    "Confirmation Issues",
    "Recovered Issues",
    "Death Issues"
  ];
  public doughnutChartData: SingleDataSet;
  public doughnutChartType: ChartType = "pie";

  // global Chart JS

  public globalDoughnutChartLabels: Label[] = [
    "Confirmation Issues",
    "Recovered Issues",
    "Death Issues"
  ];
  public globalDoughnutChartData: MultiDataSet;
  public globalDoughnutChartType: ChartType = "doughnut";

  constructor(
    private _homeService: HomeService,
    private _globalService: GlobalDataService,
    private _eventEmitter: EventEmitter
  ) {}

  ngOnInit() {
    this.showGlobalData();
    this.showdata("india");
    this.doughnutChartData = [
      this.confirmedValue,
      this.recoveredValue,
      this.deathsValue
    ];
    this.globalDoughnutChartData = [
      [
        this.globalConfirmedValue,
        this.globalRecoveredValue,
        this.globalDeathsValue
      ],
      [
        this.globalRecoveredValue * 3,
        this.globalConfirmedValue * 0.249,
        this.globalDeathsValue * 0.45
      ]
    ];
  }

  showGlobalData() {
    this._globalService.getGlobalDetails().subscribe(res => {
      this.globalResponse = res;

      this._globalData = this.globalResponse;

      this.globalConfirmedValue = this._globalData.confirmed.value;
      this.globalRecoveredValue = this._globalData.recovered.value;
      this.globalDeathsValue = this._globalData.deaths.value;

      console.log(
        this.globalConfirmedValue,
        this.globalRecoveredValue,
        this.globalDeathsValue
      );
    });
  }

  showdata(country: string) {
    this._homeService.getData(country).subscribe(res => {
      this.response = res;
      // this.formattedUpdate.confirmed = this.data.confirmed.value;
      this._data = this.response;

      this.confirmedValue = this._data.confirmed.value;
      this.recoveredValue = this._data.recovered.value;
      this.deathsValue = this._data.deaths.value;
      this.lastUpdate = this._data.lastUpdate;

      this._eventEmitter.emit("lastUpdate", this.lastUpdate);

      console.log(this.confirmedValue, this.deathsValue, this.recoveredValue);

      this.doughnutChartData = [
        this.confirmedValue,
        this.recoveredValue,
        this.deathsValue
      ];

      this.globalDoughnutChartData = [
        [
          this.globalConfirmedValue,
          this.globalRecoveredValue,
          this.globalDeathsValue
        ],
        [
          this.globalRecoveredValue * 3,
          this.globalConfirmedValue * 0.249,
          this.globalDeathsValue * 0.45
        ]
      ];
    });
  }

  inputCountry: FormGroup = new FormGroup({
    country: new FormControl(null)
  });
  onSubmit() {
    this.country = this.inputCountry.get("country").value;
    this.showdata(this.country);
    this.inputCountry.reset();
    console.log();
  }
}
