import { Component, Input } from '@angular/core';
import { Link } from '@app/shared/model/link';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-link-list',
  imports: [TableModule],
  templateUrl: './link-list.component.html'
})
export class LinkListComponent {

  @Input() public title = '';

  @Input() public links: Link[] = [];

}
