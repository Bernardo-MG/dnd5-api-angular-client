import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-waiting-wrapper',
  templateUrl: './waiting-wrapper.component.html',
  styleUrls: ['./waiting-wrapper.component.sass']
})
export class WaitingWrapperComponent {

  @Input() public waiting = false;

}
