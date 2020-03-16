import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class DailyUpdateService {
  public formattedLastUpdate: string;
  constructor(
    private _eventEmitter: EventEmitter,
    private _datePipe: DatePipe,
    private _httpClients:HttpClient
  ) {}
  today = new Date();
  formattedDate: any;
  decreaseDate: any;
  getDailyUpdate() {
    this.decreaseDate = this.today.setDate(this.today.getDate() - 1);
    this.formattedDate = this._datePipe.transform(
      this.decreaseDate,
      "MM-dd-yyyy"
    );
    return this._httpClients.get(
      `https://covid19.mathdro.id/api/daily/${this.formattedDate}`
    );
  }
}
