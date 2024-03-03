import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-delivery-map',
  templateUrl: './delivery-map.component.html',
  styleUrls: ['./delivery-map.component.scss']
})
export class DeliveryMapComponent {

  private map!: L.Map;
  private marker!: L.Marker;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  onSubmit(latitudeStr: string, longitudeStr: string): void {
    const latitude = parseFloat(latitudeStr);
    const longitude = parseFloat(longitudeStr);
  
    if (!isNaN(latitude) && !isNaN(longitude)) {
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
  
      this.marker = L.marker([latitude, longitude]).addTo(this.map);
      this.map.setView([latitude, longitude], 15);
    } else {
      console.error('Invalid latitude or longitude');
    }
  }
  
  

  
//   title = 'AngularOSM';

//   options: Leaflet.MapOptions = {

//     layers: getLayers(),

//     zoom: 12,

//     center: new Leaflet.LatLng(43.530147, 16.488932)

//   };

// }

// export const getLayers = (): Leaflet.Layer[] => {

//   return [

  //   new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

  //     attribution: '&copy; OpenStreetMap contributors'

  //   } as Leaflet.TileLayerOptions),

  // ] as Leaflet.Layer[];
  // private map!: L.Map; // Explicitly declare the type as L.Map

  // private initMap(): void {
  //   this.map = L.map('map', {
  //     center: [ 39.8282, -98.5795 ],
  //     zoom: 3
  //   });

  //   const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 18,
  //     minZoom: 3,
  //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  //   });

  //   tiles.addTo(this.map);
  // }

  // constructor() {
  //  }

  // ngAfterViewInit(): void {
  //   this.initMap();
  // }
}
