import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Proficiency } from '@app/core/api/models/charclass/proficiency';

@Component({
  selector: 'dnd5-proficiencies',
  imports: [CommonModule],
  templateUrl: './proficiencies.component.html'
})
export class ProficienciesComponent {

  @Input() public proficiencies: Proficiency[] = [];

}
