import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/Services/Constants.service';

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.css"]
})
export class MapsComponent implements OnInit {
  constructor(private _contants: ConstantsService) {}

  ngOnInit() {
   
  }
}
