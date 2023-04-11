import { Component, Input } from '@angular/core';
import { MenuLink } from '@app/shared/models/menu-link';

@Component({
  selector: 'shared-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.sass']
})
export class LinkListComponent {

  @Input() links: MenuLink[] = [];

}
