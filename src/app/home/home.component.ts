import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _homeService:HomeService) { }

  ngOnInit() {
    this.showData();
  }
  showdata()
  {
    this._homeService.getData().subscribe(res=>
      {
        console.log(res)
      })
  }
}
