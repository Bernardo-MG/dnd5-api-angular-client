import { Component, Input } from '@angular/core';

/**
 * Waiting cue wrapper. Works on a waiting flag, when set it will show the waiting cue instead of the wrapped component.
 */
@Component({
  selector: 'shared-waiting-wrapper',
  templateUrl: './waiting-wrapper.component.html',
  styleUrls: ['./waiting-wrapper.component.sass']
})
export class WaitingWrapperComponent {

  /**
   * Waiting cue flag. When active it show the waiting cue.
   */
  @Input() public waiting = false;

}
