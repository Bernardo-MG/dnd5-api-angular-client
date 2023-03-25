import { Component, Input } from '@angular/core';
import { StartingEquipment } from '@app/dnd5/models/equipment/starting-equipment';

@Component({
  selector: 'dnd5-initial-equipment',
  templateUrl: './initial-equipment.component.html',
  styleUrls: ['./initial-equipment.component.sass']
})
export class InitialEquipmentComponent {

  @Input() equipment: StartingEquipment[] = [];

}
