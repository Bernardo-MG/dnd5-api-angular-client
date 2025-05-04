import { Component, Input } from '@angular/core';
import { Choice } from '@app/dnd5/models/options/choice';
import { OptionSetComponent } from '../option-set/option-set.component';

@Component({
  selector: 'dnd5-choice',
  imports: [OptionSetComponent],
  templateUrl: './choice.component.html'
})
export class ChoiceComponent {

  @Input() public choice: Choice = new Choice();

}
