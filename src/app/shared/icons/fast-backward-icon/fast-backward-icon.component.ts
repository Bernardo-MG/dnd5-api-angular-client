import { Component } from '@angular/core';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'shared-fast-backward-icon',
  templateUrl: './fast-backward-icon.component.html',
  styleUrls: ['./fast-backward-icon.component.sass']
})
export class FastBackwardIconComponent {

  public icon = faAnglesLeft;

}
