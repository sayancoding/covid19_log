import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  getData(){
    return this._httpClients.get(
      "https://covid19.mathdro.id/api/countries/IND"
    );
  }

  constructor(private _httpClients:HttpClient) { }
}
