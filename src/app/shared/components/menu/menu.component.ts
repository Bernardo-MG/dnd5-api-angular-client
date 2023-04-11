import { Component, Input } from '@angular/core';
import { Menu } from '@app/shared/models/menu';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  
  @Input() id = '';

  @Input() menus: Menu[] = [];

}
