import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  private map!: L.Map;
  private markers: L.Marker[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
    const coordinates = [
      { latitude: 19.0760, longitude: 72.8777 }, // Mumbai
      { latitude: 18.9886, longitude: 73.1100 }, // Panvel
      // Add more coordinates as needed
    ];
    this.markAreas(coordinates);
  }

  private initMap(): void {
    this.map = L.map('map').setView([19.0760, 72.8777], 10); // Adjust zoom level as needed

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  private markAreas(coordinates: { latitude: number, longitude: number }[]): void {
    coordinates.forEach(coord => {
      const marker = L.marker([coord.latitude, coord.longitude]).addTo(this.map);
      this.markers.push(marker);
    });
  }
}
