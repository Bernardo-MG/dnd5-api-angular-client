import { Component, Input } from '@angular/core';
import { Proficiency } from '@app/dnd5/models/charclass/proficiency';

@Component({
  selector: 'dnd5-proficiencies',
  templateUrl: './proficiencies.component.html',
  styleUrls: ['./proficiencies.component.sass']
})
export class ProficienciesComponent {

  @Input() public proficiencies: Proficiency[] = [];

}
