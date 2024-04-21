import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BiggestMachinesComponent } from './biggest-machines/biggest-machines.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BiggestMachinesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'biggestMachines';
}
