import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-iterario',
  standalone: true,
  imports: [FormsModule, CalendarModule],  
  templateUrl: './iterario.component.html',
  styleUrls: ['./itinerario.component.scss']
})
export class IterarioComponent {
  origen: string = '';
  destino: string = '';
  fechaViaje: Date | undefined;

  intercambiar() {
    const temp = this.origen;
    this.origen = this.destino;
    this.destino = temp;
  }
}