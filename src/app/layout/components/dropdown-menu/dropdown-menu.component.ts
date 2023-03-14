import { Component, Input } from '@angular/core';
import { MenuLink } from '@app/layout/models/menu-link';

@Component({
  selector: 'dnd5-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.sass']
})
export class DropdownMenuComponent {

  @Input() title: string = '';

  @Input() links: MenuLink[] = [];

  constructor() { }

}
