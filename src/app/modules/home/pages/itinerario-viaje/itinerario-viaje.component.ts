import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';

import { ButtonModule} from 'primeng/button';
import { InputTextModule} from 'primeng/inputtext'; 
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';
import {RouterLink} from '@angular/router';

import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
@Component({
  selector: 'app-itinerario-viaje',
  standalone: true,
  imports: [CardModule, ButtonModule, CalendarModule, FormsModule, InputTextModule, CommonModule, RouterLink],
  templateUrl: './itinerario-viaje.component.html',
  styleUrl: './itinerario-viaje.component.scss'
})
export class ItinerarioViajeComponent {
  ciudades= [
    'Porotviejo', 'Quito', 'Guayaquil', 'Cuenca', 'Manta', 'Esmeraldas', 'Ibarra', 'Riobamba', 'Ambato', 'Loja'  
  ]
  ciudadOrigen: string = '';
  ciudadDestino: string = '';
  intercambiar() {
    if (this.ciudadOrigen && this.ciudadDestino) {
      [this.ciudadOrigen, this.ciudadDestino] = [this.ciudadDestino, this.ciudadOrigen];
    }
    console.log('Origen:', this.ciudadOrigen, 'Destino:', this.ciudadDestino);
  }
  selectedDate: Date | null = null;
  private router= inject(Router);
  irAAsientos() {
  this.router.navigate(['/asientos']);
}

}
