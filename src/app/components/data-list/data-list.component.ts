import { Component, Input } from '@angular/core';
import { MenuLink } from '@app/components/models/menu-link';

@Component({
  selector: 'dnd5-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.sass']
})
export class DataListComponent {

  @Input() links: MenuLink[] = [];

  constructor() { }

}
