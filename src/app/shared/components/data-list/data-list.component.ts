import { Component, Input } from '@angular/core';
import { MenuLink } from '@app/shared/models/menu-link';

@Component({
  selector: 'shared-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.sass']
})
export class DataListComponent {

  @Input() links: MenuLink[] = [];

}
