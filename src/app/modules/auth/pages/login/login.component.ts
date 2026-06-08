import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showPassword = false;
  origen = '';
  destino = '';
  fechaViaje: any;

  constructor(private router: Router) {}

  // Esta función la necesita el botón de las flechas de su HTML
  intercambiar() {
    const temp = this.origen;
    this.origen = this.destino;
    this.destino = temp;
  }

  // Esta función se dispara al dar clic en "Iniciar sesión"
  iniciarSesion() {
    this.router.navigate(['/iterario']);
  }
}