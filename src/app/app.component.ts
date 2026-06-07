import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IterarioComponent } from './modules/iterario/pages/iterario/iterario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IterarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {}