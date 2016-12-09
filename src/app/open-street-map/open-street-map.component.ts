import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-open-street-map',
  templateUrl: './open-street-map.component.html',
  styleUrls: ['./open-street-map.component.css']
})
export class OpenStreetMapComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

    var L = require('../../../node_modules/leaflet/dist/leaflet-src.js');
        if(L.map('mapid')){
          console.log('pouet');
          L.map('mapid').remove();
          console.log('pouet1');
        };
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/almonais/ciwgdti3200b52qmvd3p06jmp/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxtb25haXMiLCJhIjoiY2l3Z2RieXFrMDAwaDJvcDQ4MGo0ejJ5ciJ9.U_mMuQbZhB0KDo1AnsUOvQ', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.mapbox-streets-v7',
        accessToken: 'pk.eyJ1IjoiYWxtb25haXMiLCJhIjoiY2l3Z2RjY3VrMDAwaDJva3lueXVuMzg2ayJ9.RlDfOMYnK0n3Lj74_H1Npw'
    }).addTo(mymap);

    var marker = L.marker([51.5, -0.09]).addTo(mymap);

    mymap.on('click', (e: LeafletMouseEvent) => {
      let marker = L.marker(e.latlng)
      .bindPopup('Popup')
      .addTo(mymap)
    });

  }

  // mapClicked($event: MouseEvent) {
  //   console.log('pouet');
  //   console.log($event.latlng);
  //   // console.log(this.lat);
  //   // console.log(google.maps.places)
  //   // this.markers.push({
  //   //   lat: $event.coords.lat,
  //   //   lng: $event.coords.lng
  //   // });
  // }

}
