import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IterarioComponent } from './modules/iterario/iterario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IterarioComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Tuviaje';
}
