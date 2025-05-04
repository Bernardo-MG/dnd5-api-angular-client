import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StartingEquipment } from '@app/dnd5/models/equipment/starting-equipment';

@Component({
  selector: 'dnd5-initial-equipment',
  imports: [CommonModule],
  templateUrl: './initial-equipment.component.html'
})
export class InitialEquipmentComponent {

  @Input() equipment: StartingEquipment[] = [];

}
