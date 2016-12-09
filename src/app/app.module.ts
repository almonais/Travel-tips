import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { MesVoyagesComponent } from './mes-voyages/mes-voyages.component';
import { AmisVoyagesComponent } from './amis-voyages/amis-voyages.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapsComponent } from './maps/maps.component';
import { OpenStreetMapComponent } from './open-street-map/open-street-map.component';
import { TravelCreationComponent } from './travel-creation/travel-creation.component';
import { GooglePlaceModule } from 'ng2-google-place-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MesVoyagesComponent,
    AmisVoyagesComponent,
    MapsComponent,
    OpenStreetMapComponent,
    TravelCreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBES_58zLj0i_l-H0Q57Dv8Lc-0O2avkt8',
      libraries: ['places']
    }),
    GooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
