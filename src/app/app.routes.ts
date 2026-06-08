import { Routes } from '@angular/router';
import { HomeContentComponent } from './modules/home/home-content/home-content.component';
import {SeleccionCooperativasComponent} from './modules/home/pages/seleccion-cooperativas/seleccion-cooperativas.component';
import {ItinerarioViajeComponent} from './modules/home/pages/itinerario-viaje/itinerario-viaje.component';
import {AsientosComponent} from './modules/home/pages/asientos/asientos.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeContentComponent
  },
  {
    path: 'seleccion-cooperativas',
    component: SeleccionCooperativasComponent
  },
  {
    path: 'itinerario-viaje',
    component: ItinerarioViajeComponent
  },
  {
    path: 'asientos',
    component: AsientosComponent
  }
];
  