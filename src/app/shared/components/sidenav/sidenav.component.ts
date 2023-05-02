import { Component, Input } from '@angular/core';
import { Menu } from '@app/shared/models/menu';

/**
 * Side menu navigation bar.
 */
@Component({
  selector: 'shared-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent {

  /**
   * Menus to show in the navbar.
   */
  @Input() menus: Menu[] = [];

}
