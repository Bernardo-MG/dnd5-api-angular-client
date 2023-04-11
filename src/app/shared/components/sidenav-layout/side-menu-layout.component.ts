import { Component, Input } from '@angular/core';
import { Menu } from '@app/shared/models/menu';

@Component({
  selector: 'shared-sidenav-layout',
  templateUrl: './side-menu-layout.component.html',
  styleUrls: ['./side-menu-layout.component.sass']
})
export class SidenavLayoutComponent {

  @Input() public menus: Menu[] = [];

  @Input() public title = '';

  @Input() public github = '';

}
