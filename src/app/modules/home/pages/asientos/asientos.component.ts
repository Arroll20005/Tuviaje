import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

interface Asiento {
  numero: number;
  estado: 'ocupado' | 'disponible' | 'seleccionado';
}

@Component({
  selector: 'app-asientos',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarModule, ButtonModule],
  templateUrl: './asientos.component.html',
  styleUrl: './asientos.component.scss',
})
export class AsientosComponent implements OnInit {
  origen = 'Portoviejo';
  destino = 'Quito';
  terminalDestino = 'Terminal Terrestre de Quito Sur-Quitumbe';
  fechaViaje: Date | null = null;
  soloIda = true;
  operador = 'Trans Esmeralda';

  maxPasajeros = 2;

  asientosFila1: Asiento[] = [];
  asientosFila2: Asiento[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cargarAsientosMock();
  }

  cargarAsientosMock(): void {
    this.asientosFila1 = [
      { numero: 1, estado: 'ocupado' },
      { numero: 2, estado: 'disponible' },
      { numero: 3, estado: 'seleccionado' },
      { numero: 4, estado: 'disponible' },
      { numero: 5, estado: 'disponible' },
      { numero: 6, estado: 'disponible' },
    ];

    this.asientosFila2 = [
      { numero: 7, estado: 'ocupado' },
      { numero: 8, estado: 'disponible' },
      { numero: 9, estado: 'disponible' },
      { numero: 10, estado: 'disponible' },
      { numero: 11, estado: 'seleccionado' },
      { numero: 12, estado: 'disponible' },
    ];
  }

  get totalSeleccionados(): number {
    return [...this.asientosFila1, ...this.asientosFila2].filter(
      (asiento) => asiento.estado === 'seleccionado',
    ).length;
  }

  seleccionarAsiento(asiento: Asiento): void {
    if (asiento.estado === 'ocupado') {
      return;
    }

    if (asiento.estado === 'seleccionado') {
      asiento.estado = 'disponible';
      return;
    }

    if (this.totalSeleccionados >= this.maxPasajeros) {
      alert(
        `Solo puedes seleccionar un máximo de ${this.maxPasajeros} asientos.`,
      );
      return;
    }

    asiento.estado = 'seleccionado';
  }

  cancelar(): void {
    [...this.asientosFila1, ...this.asientosFila2].forEach((asiento) => {
      if (asiento.estado === 'seleccionado') {
        asiento.estado = 'disponible';
      }
    });
    this.router.navigate(['/itinerario-viaje']);
  }

  pagar(): void {
    const seleccionados = [...this.asientosFila1, ...this.asientosFila2]
      .filter((asiento) => asiento.estado === 'seleccionado')
      .map((asiento) => asiento.numero);

    console.log('Procesando pago para los asientos:', seleccionados);
    this.router.navigate(['/pago']);
  }
}
