import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StartingEquipment } from '@app/core/api/models/equipment/starting-equipment';

@Component({
  selector: 'dnd5-initial-equipment',
  imports: [CommonModule],
  templateUrl: './initial-equipment.component.html'
})
export class InitialEquipmentComponent {

  @Input() equipment: StartingEquipment[] = [];

}
