import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: { 'ngSkipHydration': 'true' } //funciona para evitar el error de "ExpressionChangedAfterItHasBeenCheckedError" al usar rutas en Angular
})
export class AppComponent {
  title = 'Tuviaje';
}
