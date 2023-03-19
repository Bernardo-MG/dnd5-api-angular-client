import { Component, Input } from '@angular/core';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dnd5-navigation-template',
  templateUrl: './navigation-template.component.html',
  styleUrls: ['./navigation-template.component.sass']
})
export class NavigationTemplateComponent {

  public backwardIcon = faBackward;

  public forwardIcon = faForward;

  @Input() public first = true;
  
  @Input() public last = true;
  
  @Input() public current = 0;
  
  @Input() public firstHalf: number[] = [];
  
  @Input() public secondHalf: number[] = [];

  constructor() { }

}
