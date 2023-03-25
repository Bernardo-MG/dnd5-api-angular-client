import { Component, Input } from '@angular/core';
import { Choice } from '@app/dnd5/models/options/choice';

@Component({
  selector: 'dnd5-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.sass']
})
export class ChoiceComponent {

  @Input() public choice: Choice = new Choice();

}
