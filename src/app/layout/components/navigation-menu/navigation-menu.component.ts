import { Component, Input } from '@angular/core';
import { MenuLink } from '../../models/menu-link';

@Component({
  selector: 'dnd5-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.sass']
})
export class NavigationMenuComponent {

  @Input() links: MenuLink[] = [];

  @Input() title: String = '';

  constructor() { }

}
