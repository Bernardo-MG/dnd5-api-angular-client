import { Component, Input } from '@angular/core';
import { MenuLink } from '@app/layout/models/menu-link';

@Component({
  selector: 'dnd5-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent {

  @Input() links: MenuLink[] = [];

  constructor() { }

}
