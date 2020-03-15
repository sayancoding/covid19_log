import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Services/home.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  data: {};
  country: string;

  constructor(private _homeService: HomeService) {}

  ngOnInit() {
    this.showdata("india");
  }
  showdata(country: string) {
    this._homeService.getData(country).subscribe(res => {
      this.data = res;
      console.log(res);
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

  // charting

  public doughnutChartLabels: Label[] = [
    "Confirmation Issues",
    "Affected Issues",
    "Panademic Issues"
  ];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = "doughnut";

  // end

}
