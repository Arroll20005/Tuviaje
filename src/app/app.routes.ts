import { Routes } from '@angular/router';
import { HomeContentComponent } from './modules/home/home-content/home-content.component';
import { SeleccionCooperativasComponent } from './modules/home/pages/seleccion-cooperativas/seleccion-cooperativas.component';
import { AsientosComponent } from './modules/home/pages/asientos/asientos.component';
import { ItinerarioViajeComponent } from './modules/home/pages/itinerario-viaje/itinerario-viaje.component';
export const routes: Routes = [
  {
    path: 'itinerario-viaje',
    component: ItinerarioViajeComponent,
  },


  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'home',
    component: HomeContentComponent,
  },

  {
    path: 'seleccion-cooperativas',
    component: SeleccionCooperativasComponent,
  },

  {
    path: 'asientos',
    component: AsientosComponent,
  },

  {
    path: 'iterario-viaje',
    loadComponent: () =>
      import('./modules/iterario/pages/iterario/iterario.component').then(
        (m) => m.IterarioComponent,
      ),
  },
];
