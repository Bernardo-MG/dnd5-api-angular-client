import { Component, Input } from '@angular/core';
import { MenuLink } from '../../models/menu-link';

@Component({
  selector: 'dnd5-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  @Input() links: MenuLink[] = [];

  @Input() title: String = '';

  constructor() { }

}
