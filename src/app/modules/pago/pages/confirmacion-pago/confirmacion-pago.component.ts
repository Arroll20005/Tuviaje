import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion-pago',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmacion-pago.component.html',
  styleUrl: './confirmacion-pago.component.scss',
})
export class ConfirmacionPagoComponent {
  mostrarBoletoModal: boolean = false;

  constructor(private router: Router) {}

  regresarAlPago(): void {
    this.router.navigate(['/pago']);
  }

  irAPaginaPrincipal(): void {
    this.router.navigate(['/iterario']);
  }

  abrirBoleto(): void {
    this.mostrarBoletoModal = true;
  }

  cerrarBoleto(): void {
    this.mostrarBoletoModal = false;
  }
}
