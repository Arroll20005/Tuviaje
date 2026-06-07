import { Routes } from '@angular/router';
import { IterarioComponent } from './modules/iterario/iterario.component';
import { PagoComponent } from './modules/pago/pago.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'iterario',
    loadComponent: () =>
      import('./modules/iterario/pages/iterario/iterario.component').then(
        (m) => m.IterarioComponent
      ),
  },
  { 
    path: 'pago', 
    component: PagoComponent 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
