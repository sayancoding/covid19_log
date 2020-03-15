import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Services/home.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Label, MultiDataSet, SingleDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { FormattedUpdate } from '../models/countryDetails';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private response: any;
  private country: string;

  public _data: FormattedUpdate;

  confirmedValue: number = 0;
  recoveredValue: number = 0;
  deathsValue: number = 0;

  
  // charting
  
  public doughnutChartLabels: Label[] = [
    "Confirmation Issues",
    "Recovered Issues",
    "Death Issues"
  ];
  public doughnutChartData: SingleDataSet;
  public doughnutChartType: ChartType = "doughnut";
  
  // end

  constructor(private _homeService: HomeService) {}

  ngOnInit() {
    this.showdata("india");
    this.doughnutChartData = [
      this.confirmedValue,
      this.recoveredValue,
      this.deathsValue
    ];
  }
  showdata(country: string) {
    this._homeService.getData(country).subscribe(res => {
      this.response = res;
      // this.formattedUpdate.confirmed = this.data.confirmed.value;
      this._data = this.response;

      this.confirmedValue = this._data.confirmed.value;
      this.recoveredValue = this._data.recovered.value;
      this.deathsValue = this._data.deaths.value;
      console.log(this.confirmedValue, this.deathsValue, this.recoveredValue);

      this.doughnutChartData = [
        this.confirmedValue,
        this.recoveredValue,
        this.deathsValue
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
