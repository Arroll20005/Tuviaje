import { Routes } from '@angular/router';

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
    loadComponent: () => 
      import('./modules/pago/pago/pago.component').then(
        (m) => m.PagoComponent
      ),
  },
  { 
    path: 'confirmacion', 
    loadComponent: () => 
      import('./modules/pago/pages/confirmacion-pago/confirmacion-pago.component').then(
        (m) => m.ConfirmacionPagoComponent
      ),
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];