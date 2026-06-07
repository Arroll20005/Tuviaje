import { Routes } from '@angular/router';
import { IterarioComponent } from './modules/iterario/iterario.component';
import { PagoComponent } from './modules/pago/pago.component';

export const routes: Routes = [
  { path: '', component: IterarioComponent },
  { path: 'pago', component: PagoComponent },
  { path: '**', redirectTo: '' }
];