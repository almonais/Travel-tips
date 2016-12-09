import { Routes, RouterModule } from "@angular/router";

import { MesVoyagesComponent } from "./mes-voyages/mes-voyages.component";
import { TravelCreationComponent } from './travel-creation/travel-creation.component';
import { AmisVoyagesComponent  } from "./amis-voyages/amis-voyages.component";
import { MapsComponent } from './maps/maps.component';
import { OpenStreetMapComponent } from './open-street-map/open-street-map.component';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: '/mes-voyages', pathMatch: 'full' },
	{ path: 'mes-voyages', component: MesVoyagesComponent },
	{ path: 'amis-voyages', component: AmisVoyagesComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'openstreetmap', component: OpenStreetMapComponent },
  { path: 'travel-creation', component: TravelCreationComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);
