import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Link } from '@app/shared/model/link';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-link-list',
  imports: [CommonModule, RouterLink, TableModule],
  templateUrl: './link-list.component.html'
})
export class LinkListComponent {

  @Input() public title = '';

  @Input() public links: Link[] = [];

}
