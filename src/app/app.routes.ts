import { Routes } from '@angular/router';
import { HomeContentComponent } from './modules/home/home-content/home-content.component';
import { SeleccionCooperativasComponent } from './modules/home/pages/seleccion-cooperativas/seleccion-cooperativas.component';
import { AsientosComponent } from './modules/home/pages/asientos/asientos.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
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
    path: 'iterario',
    loadComponent: () =>
      import('./modules/iterario/pages/iterario/iterario.component').then(
        (m) => m.IterarioComponent,
      ),
  },
];
