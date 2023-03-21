import { Component, Input } from '@angular/core';

@Component({
  selector: 'dnd5-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass']
})
export class ListItemComponent {

  @Input() active = false;
  
  @Input() current = 'false';

  @Input() disabled = false;

}
