import { Component } from '@angular/core';
import { MachineComponent } from '../machine/machine.component';
import { Machines } from '../../models/Machines';
import { Machine } from '../../models/Machine';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-biggest-machines',
  standalone: true,
  imports: [MachineComponent,NgClass],
  templateUrl: './biggest-machines.component.html',
  styleUrl: './biggest-machines.component.css'
})
export class BiggestMachinesComponent {
  
  biggestMachines: Machines=new Machines([new Machine("Plane","Antonov An-225 Mriya","../../assets/1.jpg","The Antonov An-225 Mriya (Ukrainian: Антонов Ан-225 Мрія, lit. dream or inspiration; NATO reporting name: Cossack) was a strategic airlift cargo aircraft designed and produced by the Antonov Design Bureau in the Soviet Union."),
    new Machine("Car","Caterpillar 797","../../assets/2.jpg","The Caterpillar 797 is a series of off-highway, ultra class, two-axle, mechanical powertrain haul trucks developed and manufactured in the United States by Caterpillar Inc. specifically for high-production mining and heavy construction applications worldwide.[1] In production since 1998, the 797 series represents Caterpillar’s largest, highest capacity haul trucks.[2] The current, third-generation model, the 797F, offers one of the largest haul truck payload capacities in the world, up to 400 short tons (363 t) and has the highest payload capacity among mechanical drive haul trucks.[3]"),
    new Machine("Ship","Harmony of the Seas","../../assets/3.jpg","Harmony of the Seas is an Oasis-class cruise ship built by STX France at the Chantiers de l'Atlantique shipyard in Saint-Nazaire, France,[15] for Royal Caribbean International. With a gross tonnage of 226,963 GT,[1] she is the fourth largest passenger ship in the world, larger than her older sisters Oasis of the Seas and Allure of the Seas, but surpassed by her newer sisters Symphony of the Seas and Wonder of the Seas. Harmony of the Seas is also the second longest cruise ship in the world, being surpassed by Icon of the Seas")
  ]);

  currentItem:Machine=this.biggestMachines.machines[0];

  setCurrentItem(t:Machine)
  {
    this.currentItem=t;
  }

 setClassButton(type:string):string
 {
  if(this.currentItem.type===type)
    return "btn-active"
  else
  return "btn"
 }
}
