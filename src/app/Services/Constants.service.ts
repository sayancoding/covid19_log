import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class ConstantsService {
  public ol: any;
  public mapUrl: string = "https://openlayers.org/en/v4.6.5/build/ol.js";

  constructor(private _http: HttpClient) {
    
  }

}
