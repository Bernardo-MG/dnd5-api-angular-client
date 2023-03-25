import { Component, Input } from '@angular/core';
import { Choice } from '@app/dnd5/models/options/choice';

@Component({
  selector: 'dnd5-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.sass']
})
export class ChoicesComponent {

  @Input() public choices: Choice[] = [];

}
