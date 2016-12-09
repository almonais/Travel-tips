import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  mapClicked($event: MouseEvent) {
    console.log('pouet');
    console.log($event.coords.lat);
    console.log(this.lat);
    // console.log(google.maps.places);
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng
    // });
  }

  constructor() { }

  ngOnInit() {
  }


}
