import { Component, Input } from '@angular/core';
import { MenuLink } from '@app/layout/models/menu-link';

@Component({
  selector: 'dnd5-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.sass']
})
export class LayoutComponent {

  @Input() public links: MenuLink[] = [];

  @Input() public title: string = '';

  constructor() { }

}
