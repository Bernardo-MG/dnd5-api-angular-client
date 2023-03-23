import { Component, Input } from '@angular/core';
import { Reference } from '@app/dnd5/models/info/reference';

@Component({
  selector: 'dnd5-proficiencies',
  templateUrl: './proficiencies.component.html',
  styleUrls: ['./proficiencies.component.sass']
})
export class ProficienciesComponent {

  @Input() public proficiencies: Reference[] = [];

}
