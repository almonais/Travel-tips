import { Routes, RouterModule } from "@angular/router";

import { MesVoyagesComponent } from "./mes-voyages/mes-voyages.component";
import { AmisVoyagesComponent  } from "./amis-voyages/amis-voyages.component";
import { MapsComponent } from './maps/maps.component';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: '/mes-voyages', pathMatch: 'full' },
	{ path: 'mes-voyages', component: MesVoyagesComponent },
	{ path: 'amis-voyages', component: AmisVoyagesComponent },
  { path: 'maps', component: MapsComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);
