import { Component, Input } from '@angular/core';
import { Choice } from '@app/dnd5/models/options/choice';

@Component({
  selector: 'dnd5-proficiency-choices',
  templateUrl: './proficiency-choices.component.html',
  styleUrls: ['./proficiency-choices.component.sass']
})
export class ProficiencyChoicesComponent {

  @Input() public choices: Choice[] = [];

}
