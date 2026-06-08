import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // 👈 1. IMPORTA EL ROUTER
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [CommonModule, FormsModule, RadioButtonModule],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.scss',
})
export class PagoComponent {
  metodoPago: string = 'tarjeta';

  constructor(private router: Router) {}

  pagar() {
    this.router.navigate(['/pago']);
  }
  irAAsientos() {
    this.router.navigate(['/asientos']);
  }
  procesarPago() {
    this.router.navigate(['/confirmacion-pago']);
  }
}
