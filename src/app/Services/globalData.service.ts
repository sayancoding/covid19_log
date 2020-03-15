import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  getGlobalDetails()
  {
    return this.httpClient.get("https://covid19.mathdro.id/api/");
  }

constructor(private httpClient:HttpClient) { }

}
