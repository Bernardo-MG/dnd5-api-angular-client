import { Component, Input } from '@angular/core';
import { Menu } from '@app/components/models/menu';

@Component({
  selector: 'dnd5-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  
  @Input() id: string = '';

  @Input() menus: Menu[] = [];

  constructor() { }

}
