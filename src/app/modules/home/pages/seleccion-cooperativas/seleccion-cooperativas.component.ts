import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion-cooperativas',
  standalone: true,
  imports: [CardModule, ButtonModule, InputTextModule, CommonModule],
  templateUrl: './seleccion-cooperativas.component.html',
  styleUrl: './seleccion-cooperativas.component.scss',
})
export class SeleccionCooperativasComponent {
  constructor(private router: Router) {}

  cooperativas = [
    {
      logo: '/assets/images/reina.jpg',
      nombre: 'Reina del Camino',
      salida: '9:45 PM',
      llegada: '7:00 AM',
      precio: '$14',
    },
    {
      logo: '/assets/images/esm.png',
      nombre: 'Flota Imbabura',
      salida: '9:45 PM',
      llegada: '7:00 AM',
      precio: '$14',
    },
  ];

  verAsientos() {
    this.router.navigate(['/asientos']);
  }
}
