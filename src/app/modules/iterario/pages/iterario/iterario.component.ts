import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-iterario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule
  ],
  templateUrl: './iterario.component.html',
  styleUrl: './iterario.component.scss',
})
export class IterarioComponent {
  origen: string = '';
  destino: string = '';
  fechaViaje: Date | undefined;


  constructor(private router: Router) {}

  intercambiar() {
    const temp = this.origen;
    this.origen = this.destino;
    this.destino = temp;
  }


  buscarViaje() {
   
    this.router.navigate(['/seleccion-cooperativas']);
  }
}