import { Component, Input } from '@angular/core';

@Component({
  selector: 'dnd5-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass']
})
export class ListItemComponent {

  @Input() active: boolean = false;
  
  @Input() current: string = 'false';

  @Input() disabled: boolean = false;

  constructor() { }

}
