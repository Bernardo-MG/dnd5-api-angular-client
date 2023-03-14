import { Component, Input } from '@angular/core';
import { MenuLink } from '@app/layout/model/menu-link';

@Component({
  selector: 'dnd5-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {

  @Input() public links: MenuLink[] = [];

  @Input() public title: string = '';

  constructor() { }

}
