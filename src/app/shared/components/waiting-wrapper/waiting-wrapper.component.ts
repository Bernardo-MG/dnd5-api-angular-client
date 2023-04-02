import { Component, Input } from '@angular/core';

@Component({
  selector: 'dnd5-waiting-wrapper',
  templateUrl: './waiting-wrapper.component.html',
  styleUrls: ['./waiting-wrapper.component.sass']
})
export class WaitingWrapperComponent {

  @Input() public waiting = false;

}
