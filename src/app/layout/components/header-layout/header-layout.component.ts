import { Component, Input } from '@angular/core';
import { Menu } from '@app/layout/models/menu';

@Component({
  selector: 'dnd5-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.sass']
})
export class LayoutComponent {

  @Input() public menus: Menu[] = [];

  @Input() public title: string = '';

  constructor() { }

}
