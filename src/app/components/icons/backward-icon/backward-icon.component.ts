import { Component } from '@angular/core';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dnd5-backward-icon',
  templateUrl: './backward-icon.component.html',
  styleUrls: ['./backward-icon.component.sass']
})
export class BackwardIconComponent {

  public icon = faBackward;

}
