import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/Services/Constants.service';
import { tileLayer, latLng, circle, polygon } from 'leaflet';

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.css"]
})
export class MapsComponent implements OnInit {
  constructor(private _contants: ConstantsService) {}

  ngOnInit() {}

  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "..."
      })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  layersControl = {
    baseLayers: {
      "Open Street Map": tileLayer(
        "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        { maxZoom: 18, attribution: "..." }
      ),
      "Open Cycle Map": tileLayer(
        "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
        { maxZoom: 18, attribution: "..." }
      )
    },
    overlays: {
      "Big Circle": circle([46.95, -122], { radius: 5000 }),
      "Big Square": polygon([
        [46.8, -121.55],
        [46.9, -121.55],
        [46.9, -121.7],
        [46.8, -121.7]
      ])
    }
  };
}
