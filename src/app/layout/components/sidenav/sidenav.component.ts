import { Component, Input } from '@angular/core';
import { Menu } from '@app/layout/models/menu';

@Component({
  selector: 'dnd5-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent {
  
  @Input() id: string = '';

  @Input() menus: Menu[] = [];

  constructor() { }

}
