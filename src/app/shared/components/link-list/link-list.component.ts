import { Component, Input } from '@angular/core';
import { Link } from '@app/shared/models/link';

/**
 * List of links component. They will be shown in the same order as received.
 */
@Component({
  selector: 'shared-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.sass']
})
export class LinkListComponent {

  /**
   * Links to show in the list.
   */
  @Input() links: Link[] = [];

}
