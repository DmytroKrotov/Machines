import { Component } from '@angular/core';
import { Machine } from '../../models/Machine';
import { Input } from '@angular/core';

@Component({
  selector: 'app-machine',
  standalone: true,
  imports: [],
  templateUrl: './machine.component.html',
  styleUrl: './machine.component.css'
})
export class MachineComponent {
   @Input() machine: Machine=new Machine();
}
