import { Component, OnInit } from '@angular/core';
import { DailyUpdateService } from '../Services/dailyUpdate.service';

@Component({
  selector: 'app-daily-details',
  templateUrl: './daily-details.component.html',
  styleUrls: ['./daily-details.component.css']
})
export class DailyDetailsComponent implements OnInit {

  dailyDetails:any;
  constructor(private _dailyService:DailyUpdateService) { }

  ngOnInit() {
   this._dailyService.getDailyUpdate().subscribe(res=>
    {
      this.dailyDetails = res;
    })
  }

}
