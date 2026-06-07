import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { IterarioComponent} from './pages/iterario/iterario.component';

@NgModule({
  declarations: [IterarioComponent],
  imports: [CommonModule, ButtonModule, TableModule],
})
export class ItinerarioModule {}
