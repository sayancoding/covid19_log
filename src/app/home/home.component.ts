import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  data : {}
  
  constructor(private _homeService: HomeService) {}


  ngOnInit() {
    this.showData();
  }
  showData() {
    this._homeService.getData().subscribe(res => {
      this.data = res ;
      console.log(res);
    });
  }
}
