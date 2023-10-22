import { Component, OnInit } from '@angular/core';
import { Map, tileLayer ,Marker ,icon  } from 'leaflet';
import { PositionsService } from '../positions.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map!: Map; // Use the definite assignment assertion
  markers: Marker[] = [];

  constructor(private positionsService: PositionsService) {}
  ngOnInit() {
    this.initMap();
    this.loadPositions();

  }

  private initMap() {
    this.map = new Map('map').setView([34.8151, 10.6417], 6); // Set the view to Tunisia

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }


  private loadPositions() {
    this.positionsService.getPositions().subscribe((positions: any[]) => {
      this.markers = positions.map((position) =>

        new Marker([position.latitude, position.longitude], {
          icon: icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'

          }),
        }).bindPopup(position.name)
      );
      // Add the markers to the map
      this.markers.forEach((marker) => marker.addTo(this.map));
    });
  }
}
