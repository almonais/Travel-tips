import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-open-street-map',
  templateUrl: './open-street-map.component.html',
  styleUrls: ['./open-street-map.component.css']
})
export class OpenStreetMapComponent implements OnInit {

  private mymap;

  constructor() {

  }
  ngOnInit() {

    console.log(this.mymap);
    if (this.mymap == null) this.initStreetMap();
  }

  initStreetMap() {
    var L = require('../../../node_modules/leaflet/dist/leaflet-src.js');
     this.mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/almonais/ciwgdti3200b52qmvd3p06jmp/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxtb25haXMiLCJhIjoiY2l3Z2RieXFrMDAwaDJvcDQ4MGo0ejJ5ciJ9.U_mMuQbZhB0KDo1AnsUOvQ', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.mapbox-streets-v7',
        accessToken: 'pk.eyJ1IjoiYWxtb25haXMiLCJhIjoiY2l3Z2RjY3VrMDAwaDJva3lueXVuMzg2ayJ9.RlDfOMYnK0n3Lj74_H1Npw'
    }).addTo(this.mymap);

    var marker = L.marker([51.5, -0.09]).addTo(this.mymap);

    this.mymap.on('click', (e: LeafletMouseEvent) => {
      let marker = L.marker(e.latlng)
      .bindPopup('Popup')
      .addTo(this.mymap)
    });
  }


}
