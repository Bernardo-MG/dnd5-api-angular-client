import { Component, Input } from '@angular/core';
import { Menu } from '@app/shared/models/menu';

@Component({
  selector: 'shared-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent {
  
  @Input() id = '';

  @Input() menus: Menu[] = [];

}
